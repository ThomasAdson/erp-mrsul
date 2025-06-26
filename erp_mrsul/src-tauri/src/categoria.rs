use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Categoria {
    pub id: String,
    pub material_class_id: String,
    pub codigo_categoria: String,
    pub nome_categoria: String,
    pub created_at: String,
}
