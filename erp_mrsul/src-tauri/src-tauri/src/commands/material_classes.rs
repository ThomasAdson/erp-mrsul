use rusqlite::{params, Connection};
use tauri::{State, command};
use crate::AppState;
use crate::error::{AppError, AppResult};
use crate::models::material_class::{MaterialClass, CreateMaterialClassRequest, UpdateMaterialClassRequest};

#[command]
pub fn create_material_class(
    state: State<'_, AppState>,
    material_class: CreateMaterialClassRequest,
) -> AppResult<MaterialClass> {
    // Validate input
    if material_class.code.is_empty() {
        return Err(AppError::ValidationError("Material class code cannot be empty".into()));
    }
    if material_class.name.is_empty() {
        return Err(AppError::ValidationError("Material class name cannot be empty".into()));
    }
    
    // Create new material class instance
    let material_class = MaterialClass::new(material_class.code, material_class.name);
    
    // Insert into database
    let conn = state.conn.lock().map_err(|_| AppError::InternalError("Failed to acquire database lock".into()))?;
    
    conn.execute(
        "INSERT INTO material_classes (id, code, name) VALUES (?1, ?2, ?3)",
        params![&material_class.id, &material_class.code, &material_class.name],
    )?;
    
    // Return the created class
    Ok(material_class)
}

#[command]
pub fn get_material_class(
    state: State<'_, AppState>,
    id: String,
) -> AppResult<MaterialClass> {
    // Get database connection
    let conn = state.conn.lock().map_err(|_| AppError::InternalError("Failed to acquire database lock".into()))?;
    
    // Query the database
    let mut stmt = conn.prepare(
        "SELECT id, code, name, created_at, updated_at FROM material_classes WHERE id = ?1"
    )?;
    
    let material_class = stmt.query_row(params![id], |row| {
        Ok(MaterialClass {
            id: row.get(0)?,
            code: row.get(1)?,
            name: row.get(2)?,
            created_at: Some(row.get(3)?),
            updated_at: Some(row.get(4)?),
        })
    })?;
    
    Ok(material_class)
}

#[command]
pub fn get_all_material_classes(state: State<'_, AppState>) -> AppResult<Vec<MaterialClass>> {
    // Get database connection
    let conn = state.conn.lock().map_err(|_| AppError::InternalError("Failed to acquire database lock".into()))?;
    
    // Query the database
    let mut stmt = conn.prepare(
        "SELECT id, code, name, created_at, updated_at FROM material_classes ORDER BY code"
    )?;
    
    let material_classes = stmt.query_map([], |row| {
        Ok(MaterialClass {
            id: row.get(0)?,
            code: row.get(1)?,
            name: row.get(2)?,
            created_at: Some(row.get(3)?),
            updated_at: Some(row.get(4)?),
        })
    })?
    .collect::<Result<Vec<_>, _>>()?;
    
    Ok(material_classes)
}

#[command]
pub fn update_material_class(
    state: State<'_, AppState>,
    id: String,
    update: UpdateMaterialClassRequest,
) -> AppResult<MaterialClass> {
    // Get database connection
    let conn = state.conn.lock().map_err(|_| AppError::InternalError("Failed to acquire database lock".into()))?;
    
    // Check if material class exists
    let mut stmt = conn.prepare("SELECT 1 FROM material_classes WHERE id = ?1")?;
    let exists = stmt.exists(params![&id])?;
    
    if !exists {
        return Err(AppError::NotFoundError(format!("Material class with id {} not found", id)));
    }
    
    // Prepare update fields
    let mut query_parts = Vec::new();
    let mut params_values: Vec<Box<dyn rusqlite::ToSql>> = Vec::new();
    
    if let Some(code) = &update.code {
        if !code.is_empty() {
            query_parts.push("code = ?");
            params_values.push(Box::new(code.clone()));
        }
    }
    
    if let Some(name) = &update.name {
        if !name.is_empty() {
            query_parts.push("name = ?");
            params_values.push(Box::new(name.clone()));
        }
    }
    
    // Add updated_at
    query_parts.push("updated_at = CURRENT_TIMESTAMP");
    
    if query_parts.is_empty() {
        return Err(AppError::ValidationError("No fields to update".into()));
    }
    
    // Build the query
    let query = format!(
        "UPDATE material_classes SET {} WHERE id = ?",
        query_parts.join(", ")
    );
    
    // Add id to params
    params_values.push(Box::new(id.clone()));
    
    // Convert params to rusqlite params
    let params_slice: Vec<&dyn rusqlite::ToSql> = params_values
        .iter()
        .map(|p| p.as_ref())
        .collect();
    
    // Execute update
    conn.execute(&query, &params_slice[..])?;
    
    // Get updated record
    get_material_class(state, id)
}

#[command]
pub fn delete_material_class(
    state: State<'_, AppState>,
    id: String,
) -> AppResult<bool> {
    // Get database connection
    let conn = state.conn.lock().map_err(|_| AppError::InternalError("Failed to acquire database lock".into()))?;
    
    // Execute delete
    let rows_affected = conn.execute("DELETE FROM material_classes WHERE id = ?1", params![id])?;
    
    if rows_affected == 0 {
        return Err(AppError::NotFoundError(format!("Material class with id {} not found", id)));
    }
    
    Ok(true)
}