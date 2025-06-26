use serde::Serialize;
use thiserror::Error;

#[derive(Error, Debug, Serialize)]
pub enum AppError {
    #[error("Database error: {0}")]
    DatabaseError(String),
    
    #[error("Item not found: {0}")]
    NotFoundError(String),
    
    #[error("Validation error: {0}")]
    ValidationError(String),
    
    #[error("Unique constraint violation: {0}")]
    UniqueConstraintError(String),
    
    #[error("Foreign key constraint violation: {0}")]
    ForeignKeyError(String),
    
    #[error("Internal error: {0}")]
    InternalError(String),
}

impl From<rusqlite::Error> for AppError {
    fn from(error: rusqlite::Error) -> Self {
        match error {
            rusqlite::Error::QueryReturnedNoRows => AppError::NotFoundError("Item not found".into()),
            rusqlite::Error::SqliteFailure(error, Some(message)) if error.code == rusqlite::ffi::ErrorCode::ConstraintViolation => {
                if message.contains("UNIQUE") {
                    AppError::UniqueConstraintError(message)
                } else if message.contains("FOREIGN KEY") {
                    AppError::ForeignKeyError(message)
                } else {
                    AppError::DatabaseError(message)
                }
            },
            _ => AppError::DatabaseError(error.to_string()),
        }
    }
}

// Helper type for Tauri commands that can return an error
pub type AppResult<T> = Result<T, AppError>;