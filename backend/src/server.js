import app from './app.js'

// server.js is responsible for STARTING the HTTP server only.
// The port comes from the PORT environment variable when provided, and falls
// back to 5000 for local development. Node's --env-file-if-exists flag (see
// package.json) loads a local .env file automatically when one exists.
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Mini CRM backend running at http://localhost:${PORT}`)
  console.log(`Health check: http://localhost:${PORT}/api/health`)
})
