function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <header>
        <h1>My App todolist</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default AppLayout