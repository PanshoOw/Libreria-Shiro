import { http, HttpResponse, delay } from 'msw'

const categorias = [
  { id: '1', nombre: 'Ficción' },
  { id: '2', nombre: 'Ciencia ficción' },
  { id: '3', nombre: 'Fantasía' },
  { id: '4', nombre: 'Historia' },
  { id: '5', nombre: 'Tecnología' },
  { id: '6', nombre: 'Misterio' }
]

export const handlers = [
  http.get('/api/categorias', async ({ request }) => {
    const url = new URL(request.url)
    const simulacion = url.searchParams.get('simular')

    // Simular el tiempo de respuesta del servidor
    await delay(1200)

    // Simular un recurso inexistente
    if (simulacion === '404') {
      return HttpResponse.json(
        { mensaje: 'Categorías no encontradas.' },
        { status: 404 }
      )
    }

    // Simular un error interno del servidor
    if (simulacion === '500') {
      return HttpResponse.json(
        { mensaje: 'Error interno del servidor.' },
        { status: 500 }
      )
    }

    // Respuesta correcta
    return HttpResponse.json({ categorias })
  })
]