// App.jsx is the root component of the frontend.
// At this stage it only renders a welcome screen. Lead management features,
// routing, forms and API calls will be added in later lessons.
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Mini CRM &amp; Lead Management System</h1>
      </header>

      <main className="app-main">
        <p>
          The project scaffold is ready. Application features will be added
          progressively in the upcoming lessons.
        </p>
      </main>

      <footer className="app-footer">
        <small>Scaffold stage - not connected to a backend or database yet.</small>
      </footer>
    </div>
  )
}

export default App
