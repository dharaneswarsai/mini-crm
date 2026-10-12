import express from 'express'

// app.js is responsible for CONFIGURING the Express application only.
// It does not start a server - that is server.js's job. Keeping them separate
// makes the app easy to test and reuse later.
const app = express()

// Parse incoming JSON request bodies (needed later for creating/updating leads).
app.use(express.json())

// Health check endpoint. This exists only to verify that the server is running
// and reachable. It contains no business logic and does not touch a database.
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Mini CRM backend is running',
    timestamp: new Date().toISOString(),
  })
})

// Fallback 404 handler for any route that was not matched above.
// Returning JSON (instead of Express's default HTML page) keeps the API
// responses consistent for frontend clients.
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  })
})

export default app
