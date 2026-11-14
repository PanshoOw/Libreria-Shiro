import { Link } from 'react-router'

function PaginaNoEncontrada() {
  return (
    <section className="pagina">
      <h2>Error 404: Página no encontrada</h2>

      <p>
        La página que intentas visitar no existe.
      </p>

      <Link to="/" className="boton">
        Volver al inicio
      </Link>
    </section>
  )
}

export default PaginaNoEncontrada