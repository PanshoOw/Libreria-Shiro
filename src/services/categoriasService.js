let categoriasEnMemoria = null

export async function obtenerCategorias(url, signal) {
  const consultaNormal = url === '/api/categorias'

  // Reutilizar los datos si ya fueron obtenidos correctamente
  if (consultaNormal && categoriasEnMemoria !== null) {
    return categoriasEnMemoria
  }

  // Consultar la API REST
  const respuesta = await fetch(url, { signal })

  // Gestionar los errores HTTP
  if (!respuesta.ok) {
    if (respuesta.status === 404) {
      throw new Error('No encontramos las categorías solicitadas.')
    }

    if (respuesta.status === 500) {
      throw new Error('El servidor presenta un problema temporal.')
    }

    throw new Error('No fue posible obtener las categorías.')
  }

  // Procesar la respuesta JSON
  const datos = await respuesta.json()

  if (!Array.isArray(datos.categorias)) {
    throw new TypeError('Formato de respuesta inválido')
  }

  // Guardar únicamente las respuestas correctas de la consulta normal
  if (consultaNormal && !signal.aborted) {
    categoriasEnMemoria = datos.categorias
  }

  return datos.categorias
}