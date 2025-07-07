use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Material {
    pub id: String,
    pub categoria_id: String,
    pub codigo_especificacao: String,
    pub descricao_especificacao: String,
    pub material_composicao: String,
    pub unidade_medida: String,
    pub codigo_material_completo: String,
    pub descricao_completa: String,
    pub observacoes: Option<String>,
    pub created_at: String,
    pub estoque_atual: f64,
    pub estoque_minimo: Option<f64>,
    
    // Campos de custos
    pub custo_padrao_por_unidade_compra: Option<f64>,
    pub unidade_compra_padrao: Option<String>,
    pub ultima_atualizacao_custo_padrao: Option<String>,
    pub peso_linear_kg_m: Option<f64>,
    pub peso_superficial_kg_m2: Option<f64>,
    pub custo_por_unidade_estoque: Option<f64>,
}
