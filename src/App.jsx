import { Link, Route, Routes } from 'react-router'
import MenuNavegacion from './components/MenuNavegacion.jsx'
import Inicio from './pages/Inicio.jsx'
import Categorias from './pages/Categorias.jsx'
import PaginaNoEncontrada from './pages/PaginaNoEncontrada.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="encabezado">
        <div className="encabezado__interior">

          <Link to="/" className="marca">
            <span className="marca__simbolo" aria-hidden="true">
              LS
            </span>

            <span className="marca__contenido">
              <span className="marca__nombre">
                Librería Shiro
              </span>

              <span className="marca__lema">
                Historias que dejan huella
              </span>
            </span>
          </Link>

          <MenuNavegacion />

        </div>
      </header>

      <main id="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="*" element={<PaginaNoEncontrada />} />
        </Routes>
      </main>

      <footer className="pie-pagina">
        <p>Librería Shiro</p>
        <span>Donde cada libro encuentra a su lector.</span>
        <small>Proyecto académico · Duoc UC</small>
      </footer>
    </div>
  )
}

export default App