#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod db;
mod error;
mod models;
mod commands;

use db::initialize_database;
use std::sync::Mutex;
use tauri::State;
use rusqlite::Connection;

// Wrapper to store the database connection in Tauri's state
pub struct AppState {
    conn: Mutex<Connection>,
}

fn main() {
    // Initialize the database connection
    let conn = initialize_database().expect("Failed to initialize database");
    
    tauri::Builder::default()
        .manage(AppState {
            conn: Mutex::new(conn),
        })
        .invoke_handler(tauri::generate_handler![
            commands::material_classes::create_material_class,
            commands::material_classes::get_material_class,
            commands::material_classes::get_all_material_classes,
            commands::material_classes::update_material_class,
            commands::material_classes::delete_material_class,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}