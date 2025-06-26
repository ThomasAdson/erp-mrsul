use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct MaterialClass {
    pub id: String,
    pub code: String,
    pub name: String,
    pub created_at: String,
    pub updated_at: String,
}
