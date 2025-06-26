# Development Guide - ERP MRSUL

## Overview

This is a Tauri application with a React frontend. Tauri provides a desktop application wrapper around a web frontend with access to native system APIs.

## Development Commands

### Full Application Development (Recommended)

```bash
npm run dev
# OR
cd erp_mrsul && npm run tauri dev
```

This command will:

1. Start the Vite development server for the React frontend
2. Compile and run the Rust backend
3. Open the Tauri desktop application
4. Enable hot-reload for both frontend and backend changes

### Frontend Only Development

```bash
npm run dev:web
# OR
cd erp_mrsul && npm run dev
```

This runs only the Vite development server. **Note:** Tauri API calls will not work in this mode.

### Building for Production

```bash
npm run build
# OR
cd erp_mrsul && npm run tauri build
```

## Important Notes

### Tauri Context

- **API calls only work in Tauri context**: The application uses Tauri's `invoke` API to communicate with the Rust backend
- **Browser vs Desktop**: When running with `npm run dev:web`, you'll see error messages about Tauri API not being available
- **Always use `npm run dev`** for full functionality during development

### Project Structure

```
erp_mrsul/
├── src/                    # React frontend
│   ├── lib/api.ts         # Tauri API calls
│   ├── pages/             # React pages/components
│   └── ...
├── src-tauri/             # Rust backend
│   ├── src/               # Rust source code
│   ├── Cargo.toml         # Rust dependencies
│   └── tauri.conf.json    # Tauri configuration
└── package.json           # Frontend dependencies and scripts
```

### Error Handling

The application includes proper error handling for Tauri API calls:

- Checks if running in Tauri context
- Shows helpful error messages when Tauri API is not available
- Graceful fallbacks for development scenarios

### Backend API

The Rust backend provides these commands:

- `list_material_classes`
- `create_material_class`
- `update_material_class`
- `list_categorias`
- `create_categoria`
- `update_categoria`
- `delete_categoria`
- `list_materiais`
- `create_material`
- `update_material`
- `delete_material`

## Troubleshooting

### "Tauri API not available" Error

**Cause**: Running frontend only (`npm run dev:web`) instead of full Tauri app.
**Solution**: Use `npm run dev` to run the complete Tauri application.

### Port Already in Use

**Cause**: Another instance is already running on port 1420.
**Solution**: Stop other instances or change the port in `vite.config.ts` and `tauri.conf.json`.

### Compilation Errors

**Cause**: Rust compilation issues in the backend.
**Solution**: Check the console output for specific Rust compiler errors and fix them in the `src-tauri/src/` directory.
