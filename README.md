# notes-app
A notes application built with FastAPI, React, and PostgreSQL.

## Prerequisites
The following versions are required to run the application:
- Python: 3.10+
- pip: 22.0.4+
- Node.js: 16.14.2+
- npm: 8.5.5+
- PostgreSQL: 14+

Required packages:
- Python:
  - fastapi: 0.92.0
  - uvicorn: 0.20.1
  - python-dotenv: 0.20.0
  - sqlalchemy: 2.0.0b2
  - asyncpg: 0.26.0
- Node.js:
  - react: 18.2.0
  - react-dom: 18.2.0
  - @vitejs/plugin-react: 2.2.0
  - typescript: 4.6.4
  - tailwindcss: 3.1.8
  - postcss: 8.4.14

## Project Structure
The file tree is as follows:
```markdown
notes-app/
|—— backend/
|    |—— main.py
|    |—— database.py
|    |—— models.py
|    |—— schemas.py
|    |—— routes.py
|    |—— requirements.txt
|    |—— .env.example
|—— docker-compose.yml
|—— frontend/
|    |—— src/
|    |    |—— index.tsx
|    |    |—— index.css
|    |    |—— App.tsx
|    |    |—— pages/
|    |    |    |—— Notes.tsx
|    |    |    |—— CreateNote.tsx
|    |    |—— components/
|    |    |    |—— ui.tsx
|    |—— tsconfig.json
|    |—— package.json
|    |—— .env
|    |—— index.html
|    |—— vite.config.ts
|    |—— tailwind.config.js
|    |—— postcss.config.js
|    |—— declarations.d.ts
```

## Backend Setup
### 1. Create virtual environment
Create a new virtual environment named `venv` with the following command:
```bash
python -m venv venv
```

### 2. Activate virtual environment
Activate the virtual environment with the following commands:
- Windows: `venv\Scripts\activate`
- Mac/Linux: `source venv/bin/activate`

### 3. Install dependencies
Install the dependencies listed in `requirements.txt` with the following command:
```bash
pip install -r requirements.txt
```

### 4. Create PostgreSQL database
Create a new PostgreSQL database named `notes-app` with the following command:
```bash
createdb notes-app
```
Alternatively, you can use the `psql` command to create the database:
```bash
psql -U postgres -c 'CREATE DATABASE notes-app;'
```

### 5. Configure environment variables
Create a new file named `.env` in the `backend/` directory and add the following environment variables:
- `DATABASE_URL`: The URL of the PostgreSQL database (e.g. `postgresql+asyncpg://postgres:your_password@localhost:5432/notes-app`)
- `VITE_API_URL`: Not required in backend

Example `backend/.env` file:
```makefile
DATABASE_URL=postgresql+asyncpg://postgres:your_password@localhost:5432/notes-app
```

### 6. Start backend
Start the backend server with the following command:
```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8001 --reload
```
The backend API will be available at `http://localhost:8001`. You can access the API documentation at `http://localhost:8001/docs`.

## Quick Start
To quickly set up and launch the application, you can use the `setup.bat` (Windows) or `bash setup.sh` (Mac/Linux) script.

## Frontend Setup
### 1. Install dependencies
Install the dependencies listed in `package.json` with the following command:
```bash
cd frontend
npm install
```

### 2. Configure environment
Create a new file named `.env` in the `frontend/` directory and add the following environment variable:
- `VITE_API_URL`: The URL of the backend API (e.g. `http://localhost:8001`)

Example `frontend/.env` file:
```makefile
VITE_API_URL=http://localhost:8001
```

### 3. Start frontend
Start the frontend server with the following command:
```bash
npm run dev
```
The frontend will be available at `http://localhost:5173`.

## Running Both Together
To run both the backend and frontend servers simultaneously, open two terminals:
Terminal 1 (Backend):
```bash
cd backend
uvicorn main:app --port 8001 --reload
```
Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
```

## API Endpoints
The following API endpoints are available:
- `GET /notes`: Get a list of all notes
- `GET /notes/{note_id}`: Get a specific note by ID
- `POST /notes`: Create a new note
- `PUT /notes/{note_id}`: Update a specific note by ID
- `DELETE /notes/{note_id}`: Delete a specific note by ID

These endpoints can be accessed through the API documentation at `http://localhost:8001/docs`.

## Common Issues & Fixes
- Database connection error: Verify that PostgreSQL is running with `pg_isready`. Make sure the `DATABASE_URL` environment variable is set correctly.
- Port in use: Change the port number in the `uvicorn` command with the `--port` flag.
- Module not found: Make sure the virtual environment is activated.
- `npm install` fails: Try running `npm install --legacy-peer-deps`.

## Tech Stack
The following technologies are used in this project:
- Backend: FastAPI, SQLAlchemy 2.0, asyncpg, PostgreSQL
- Frontend: React 18, TypeScript, TailwindCSS (Vite)
- Database: PostgreSQL 14+