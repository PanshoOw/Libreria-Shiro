import { NavLink } from 'react-router'

function MenuNavegacion() {
  return (
    <nav aria-label="Navegación principal">
      <NavLink to="/" end>
        Inicio
      </NavLink>

      <NavLink to="/categorias">
        Categorías
      </NavLink>
    </nav>
  )
}

export default MenuNavegacion