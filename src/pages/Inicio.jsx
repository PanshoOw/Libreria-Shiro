import { Link } from 'react-router'

function Inicio() {
  return (
    <section className="pagina portada">

      <div className="portada__contenido">

        <span className="portada__etiqueta">
          BIENVENIDO A LIBRERÍA SHIRO
        </span>

        <h2>
          <span>Cada libro es una</span>
          <em>nueva aventura.</em>
        </h2>

        <p>
          Descubre historias inolvidables, explora nuevos mundos
          y encuentra ese libro que estabas esperando.
        </p>

        <p>
          En Librería Shiro creemos que siempre existe
          una buena historia esperando por ti.
        </p>

        <Link to="/categorias" className="boton">
          <span>Explorar categorías</span>
          <span aria-hidden="true">→</span>
        </Link>

      </div>

      {/* Ilustración decorativa de una estantería */}
      <div className="biblioteca-visual" aria-hidden="true">

        <div className="biblioteca-visual__arco" />

        <div className="biblioteca-visual__estante">
          <span className="lomo lomo--uno" />
          <span className="lomo lomo--dos" />
          <span className="lomo lomo--tres" />
          <span className="lomo lomo--cuatro" />
          <span className="lomo lomo--cinco" />
          <span className="lomo lomo--seis" />
          <span className="lomo lomo--siete" />
        </div>

        <div className="biblioteca-visual__base" />

      </div>

    </section>
  )
}

export default Inicio