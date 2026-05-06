import './App.css'

function App() {
  const menuItems = ['Commande', 'Client', 'Livraison']

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <h1>Menu</h1>
        </div>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item}>
                <button type="button">{item}</button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default App
