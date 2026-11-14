import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { obtenerCategorias } from '../services/categoriasService.js'

function Categorias() {
  const [parametros] = useSearchParams()
  const [intento, setIntento] = useState(0)

  const simulacion = parametros.get('simular')

  const urlCategorias = simulacion === '404' || simulacion === '500'
    ? `/api/categorias?simular=${simulacion}`
    : '/api/categorias'

  // Estado de la consulta HTTP
  const [consulta, setConsulta] = useState({
    url: '',
    estado: 'cargando',
    categorias: [],
    error: ''
  })

  // Evitar mostrar resultados correspondientes a otra URL
  const consultaActual = consulta.url === urlCategorias

  const cargando = !consultaActual || consulta.estado === 'cargando'
  const categorias = consultaActual ? consulta.categorias : []
  const error = consultaActual ? consulta.error : ''

  useEffect(() => {
    const controlador = new AbortController()

    async function cargarCategorias() {
      try {
        const datos = await obtenerCategorias(
          urlCategorias,
          controlador.signal
        )

        if (!controlador.signal.aborted) {
          setConsulta({
            url: urlCategorias,
            estado: 'exito',
            categorias: datos,
            error: ''
          })
        }
      } catch (error) {
        if (!controlador.signal.aborted) {
          const mensajesConocidos = new Set([
            'No encontramos las categorías solicitadas.',
            'El servidor presenta un problema temporal.',
            'No fue posible obtener las categorías.',
            'Formato de respuesta inválido'
          ])

          const mensaje = error instanceof Error
            && mensajesConocidos.has(error.message)
            ? error.message
            : 'No fue posible conectar con el servicio de categorías.'

          setConsulta({
            url: urlCategorias,
            estado: 'error',
            categorias: [],
            error: mensaje
          })
        }
      }
    }

    void cargarCategorias()

    return () => controlador.abort()
  }, [intento, urlCategorias])

  function reintentarCarga() {
    setConsulta({
      url: urlCategorias,
      estado: 'cargando',
      categorias: [],
      error: ''
    })

    setIntento((anterior) => anterior + 1)
  }

  return (
    <section className="pagina">
      <h2>Explora nuestras categorías</h2>

      <p>
        Cada género es una puerta hacia nuevas historias.
        Descubre qué tipo de lectura te interesa.
      </p>

      {/* Indicador de carga */}
      {cargando && (
        <output className="mensaje-carga">
          Cargando categorías...
        </output>
      )}

      {/* Mensaje de error */}
      {error && !cargando && (
        <div role="alert" className="categorias-error">
          <p>{error}</p>

          <div className="categorias-error__acciones">
            <button
              type="button"
              onClick={reintentarCarga}
              className="boton"
            >
              Reintentar
            </button>

            <Link
              to="/"
              className="boton boton--secundario"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      )}

      {/* Sin categorías disponibles */}
      {!cargando && !error && categorias.length === 0 && (
        <p>No hay categorías disponibles actualmente.</p>
      )}

      {/* Categorías obtenidas desde la API */}
      {!cargando && !error && categorias.length > 0 && (
        <div className="categorias-cuadricula">
          {categorias.map((categoria) => (
            <article
              key={categoria.id}
              className="categoria-tarjeta"
            >
              <span
                className="categoria-tarjeta__decoracion"
                aria-hidden="true"
              >
                ◆
              </span>

              <h3>{categoria.nombre}</h3>

              <p>
                Descubre los libros de esta categoría.
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Categorias