# Mini CRM & Lead Management System

A full-stack learning project that will eventually let a business collect,
manage, search, and track customer enquiries (leads).

> **Current status: scaffolding only.**
> This repository contains a working project foundation. Lead CRUD, MongoDB,
> authentication, dashboards, and deployment have **not** been built yet. They
> are planned for later guided lessons.

---

## 1. Project overview

The goal is to build a real-world Mini CRM (Customer Relationship Management)
system as an internship-preparation project. Right now the project provides:

- A React + Vite frontend that shows a welcome screen.
- A Node.js + Express backend that exposes a single health-check endpoint.
- A clean folder structure ready for features to be added.
- Safe environment-variable examples and Git hygiene.

Nothing beyond this foundation is implemented, by design.

## 2. Technology stack

| Layer          | Technology                          |
| -------------- | ----------------------------------- |
| Frontend       | React 18, Vite 7, JavaScript, CSS   |
| Backend        | Node.js, Express 4, JavaScript (ES modules) |
| Future database| MongoDB with Mongoose (later lesson)|

No TypeScript, Redux, Tailwind, ORM, Docker, authentication library, or UI
component library is used.

## 3. Prerequisites

- **Node.js** v20.6 or newer (Node v24 was used to build this scaffold).
  Node's built-in `--watch` and `--env-file-if-exists` flags are required.
- **npm** (comes with Node.js).
- **Windows** with PowerShell or Windows Terminal.
- A code editor such as VS Code.

Check your versions:

```powershell
node -v
npm -v
```

## 4. Folder structure

```
mini-crm/
├── frontend/                  # React + Vite application
│   ├── public/                # Static assets served as-is
│   ├── src/
│   │   ├── components/        # Reusable UI components (empty)
│   │   ├── pages/             # Page-level views (empty)
│   │   ├── services/          # API-call helpers (empty)
│   │   ├── App.jsx            # Root component (welcome screen)
│   │   ├── main.jsx           # React entry point
│   │   └── index.css          # Minimal styling
│   ├── .env.example           # Documents VITE_API_BASE_URL
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js         # Dev server pinned to port 5173
├── backend/                   # Express application
│   ├── src/
│   │   ├── routes/            # Route definitions (empty)
│   │   ├── controllers/       # Request handlers (empty)
│   │   ├── models/            # Database models (empty)
│   │   ├── middleware/        # Custom middleware (empty)
│   │   ├── app.js             # Configures the Express app
│   │   └── server.js          # Starts the HTTP server
│   ├── .env.example           # Documents PORT and NODE_ENV
│   ├── .gitignore
│   └── package.json
├── .gitignore
└── README.md
```

Folders that are intentionally empty contain a short `README.md` explaining
what will go there later.

## 5. Installation instructions

Install the frontend and backend dependencies separately. Run each command
from the `mini-crm` folder.

### Frontend dependencies (Windows PowerShell)

```powershell
cd frontend
npm install
cd ..
```

### Backend dependencies (Windows PowerShell)

```powershell
cd backend
npm install
cd ..
```

## 6. Running the applications (two separate terminals)

**Terminal 1 - backend:**

```powershell
cd backend
npm run dev
```

**Terminal 2 - frontend:**

```powershell
cd frontend
npm run dev
```

Each terminal must stay open while you use the app. `npm run dev` restarts the
backend automatically when you save a source file.

## 7. Expected local URLs

| Application | URL                              |
| ----------- | -------------------------------- |
| Frontend    | http://localhost:5173            |
| Backend     | http://localhost:5000            |
| Health check| http://localhost:5000/api/health |

If port **5173** is already in use, Vite is configured with `strictPort: true`,
so it will **fail with an error** instead of silently picking another port.
Close the other program using 5173 (or change the port in `vite.config.js`).

## 8. Testing the backend health endpoint

With the backend running, open another terminal and run:

```powershell
Invoke-RestMethod http://localhost:5000/api/health
```

You should see a JSON object similar to:

```json
{
  "status": "ok",
  "message": "Mini CRM backend is running",
  "timestamp": "2026-01-01T00:00:00.000Z"
}
```

You can also open `http://localhost:5000/api/health` in a browser.

## 9. Common startup errors and diagnostics

| Symptom | Likely cause | Fix |
| ------- | ------------ | --- |
| `Port 5173 is already in use` | Another process holds port 5173 | Close the other dev server, or change `server.port` in `vite.config.js` |
| `EADDRINUSE: address already in use :::5000` | Another process holds port 5000 | Stop it, or run with a different port: `$env:PORT=5001; npm run dev` |
| `Cannot find module 'express'` (backend) | Dependencies not installed | Run `npm install` inside `backend` |
| `Cannot find module 'react'` (frontend) | Dependencies not installed | Run `npm install` inside `frontend` |
| Blank page at localhost:5173 | Frontend not running or wrong port | Check Terminal 2 for the printed URL |
| `'node' is not recognized` | Node.js not installed or not on PATH | Reinstall Node.js and reopen the terminal |

## 10. Environment variables

Real `.env` files are **not** committed to Git. Only `.env.example` files are
provided as documentation.

**Backend** (`backend/.env.example`):

```
PORT=5000
NODE_ENV=development
```

- `PORT` - the port the Express server listens on (defaults to 5000).
- `NODE_ENV` - the environment name (for example `development`).

**Frontend** (`frontend/.env.example`):

```
VITE_API_BASE_URL=http://localhost:5000/api
```

- `VITE_API_BASE_URL` - documents the future backend API address.

> **Important:** any variable whose name starts with `VITE_` is embedded into
> the browser bundle and is **public**. Never put secrets, passwords, API keys,
> or database credentials in a `VITE_` variable.

**How to create a local `.env` file (in a future phase):**

```powershell
# Backend
cd backend
Copy-Item .env.example .env
cd ..

# Frontend
cd frontend
Copy-Item .env.example .env
cd ..
```

The backend loads `.env` automatically via Node's `--env-file-if-exists` flag.
MongoDB credentials will be added in a later lesson, never in the frontend.

## 11. Features intentionally deferred to later lessons

The following are **planned but not implemented**:

- Creating, viewing, updating, and deleting leads (CRUD)
- Lead validation
- Search, filtering, and pagination
- Lead status tracking
- Dashboard statistics
- MongoDB connection and Mongoose models
- Frontend-to-backend integration
- REST API tests
- Authentication and authorization
- Deployment

This scaffold deliberately stops at a verifiable foundation.
