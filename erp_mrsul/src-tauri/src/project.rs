use rusqlite::{params, Connection, Result};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct Project {
    pub id: String,
    pub client_id: String,
    pub client_name: String, // For display purposes
    pub name: String,
    pub code: String,
    pub start_date: String,
    pub end_date: Option<String>,
    pub status: String,
    pub description: Option<String>,
    pub created_at: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateProjectRequest {
    pub client_id: String,
    pub name: String,
    pub code: String,
    pub start_date: String,
    pub end_date: Option<String>,
    pub status: String,
    pub description: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UpdateProjectRequest {
    pub client_id: String,
    pub name: String,
    pub code: String,
    pub start_date: String,
    pub end_date: Option<String>,
    pub status: String,
    pub description: Option<String>,
}

pub fn create_project(conn: &Connection, request: CreateProjectRequest) -> Result<Project> {
    println!("🚀 [BACKEND] Creating project with data: {:?}", request);
    
    // Get client name for the response
    let client_name: String = match conn.query_row(
        "SELECT name FROM clients WHERE id = ?1",
        params![request.client_id],
        |row| row.get(0),
    ) {
        Ok(name) => {
            println!("✅ [BACKEND] Found client name: {}", name);
            name
        },
        Err(e) => {
            println!("❌ [BACKEND] Failed to find client with ID {}: {:?}", request.client_id, e);
            return Err(e);
        }
    };
    
    let project = Project {
        id: Uuid::new_v4().to_string(),
        created_at: chrono::Local::now().to_rfc3339(),
        client_id: request.client_id,
        client_name,
        name: request.name,
        code: request.code,
        start_date: request.start_date,
        end_date: request.end_date,
        status: request.status,
        description: request.description,
    };

    println!("📝 [BACKEND] Project with generated ID and timestamp: {:?}", project);

    let result = conn.execute(
        "INSERT INTO projects (id, client_id, name, code, start_date, end_date, status, description, created_at)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)",
        params![
            project.id,
            project.client_id,
            project.name,
            project.code,
            project.start_date,
            project.end_date,
            project.status,
            project.description,
            project.created_at,
        ],
    );

    match result {
        Ok(_) => {
            println!("✅ [BACKEND] Project created successfully: {}", project.id);
            Ok(project)
        }
        Err(e) => {
            println!("❌ [BACKEND] Failed to create project: {:?}", e);
            Err(e)
        }
    }
}

pub fn get_all_projects(conn: &Connection) -> Result<Vec<Project>> {
    println!("📋 [BACKEND] Loading all projects with client names...");
    
    let mut stmt = conn.prepare(
        "SELECT p.id, p.client_id, c.name as client_name, p.name, p.code, 
                p.start_date, p.end_date, p.status, p.description, p.created_at
         FROM projects p
         JOIN clients c ON p.client_id = c.id
         ORDER BY p.created_at DESC"
    )?;

    let projects = stmt.query_map([], |row| {
        Ok(Project {
            id: row.get(0)?,
            client_id: row.get(1)?,
            client_name: row.get(2)?,
            name: row.get(3)?,
            code: row.get(4)?,
            start_date: row.get(5)?,
            end_date: row.get(6)?,
            status: row.get(7)?,
            description: row.get(8)?,
            created_at: row.get(9)?,
        })
    })?;

    let result: Result<Vec<Project>> = projects.collect();
    match &result {
        Ok(projects) => {
            println!("✅ [BACKEND] Loaded {} projects successfully", projects.len());
            for (i, project) in projects.iter().enumerate() {
                println!("  {}. {} - {} ({})", i + 1, project.name, project.client_name, project.status);
            }
        }
        Err(e) => {
            println!("❌ [BACKEND] Failed to load projects: {:?}", e);
        }
    }
    result
}

pub fn update_project(conn: &Connection, id: String, request: UpdateProjectRequest) -> Result<()> {
    println!("📝 [BACKEND] Updating project {} with data: {:?}", id, request);
    
    let result = conn.execute(
        "UPDATE projects 
         SET client_id = ?1, name = ?2, code = ?3, start_date = ?4, end_date = ?5, status = ?6, description = ?7
         WHERE id = ?8",
        params![
            request.client_id,
            request.name,
            request.code,
            request.start_date,
            request.end_date,
            request.status,
            request.description,
            id,
        ],
    );

    match result {
        Ok(rows_affected) => {
            if rows_affected > 0 {
                println!("✅ [BACKEND] Project {} updated successfully", id);
                Ok(())
            } else {
                println!("⚠️ [BACKEND] No project found with ID: {}", id);
                Err(rusqlite::Error::QueryReturnedNoRows)
            }
        }
        Err(e) => {
            println!("❌ [BACKEND] Failed to update project {}: {:?}", id, e);
            Err(e)
        }
    }
}

pub fn delete_project(conn: &Connection, id: String) -> Result<()> {
    println!("🗑️ [BACKEND] Deleting project with ID: {}", id);
    
    let result = conn.execute("DELETE FROM projects WHERE id = ?1", params![id]);
    
    match result {
        Ok(rows_affected) => {
            if rows_affected > 0 {
                println!("✅ [BACKEND] Project {} deleted successfully", id);
                Ok(())
            } else {
                println!("⚠️ [BACKEND] No project found with ID: {}", id);
                Err(rusqlite::Error::QueryReturnedNoRows)
            }
        }
        Err(e) => {
            println!("❌ [BACKEND] Failed to delete project {}: {:?}", id, e);
            Err(e)
        }
    }
}
