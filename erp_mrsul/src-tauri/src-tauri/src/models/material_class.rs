use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct MaterialClass {
    pub id: String,
    pub code: String,
    pub name: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub created_at: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub updated_at: Option<String>,
}

impl MaterialClass {
    pub fn new(code: String, name: String) -> Self {
        Self {
            id: Uuid::new_v4().to_string(),
            code,
            name,
            created_at: None,
            updated_at: None,
        }
    }
}

#[derive(Debug, Deserialize)]
pub struct CreateMaterialClassRequest {
    pub code: String,
    pub name: String,
}

#[derive(Debug, Deserialize)]
pub struct UpdateMaterialClassRequest {
    pub code: Option<String>,
    pub name: Option<String>,
}