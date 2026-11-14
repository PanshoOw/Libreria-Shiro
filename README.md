# 📚 Librería Shiro

### Aplicación React con integración de una API REST simulada mediante Mock Service Worker

**Historias que dejan huella.** 🐶

---

## 📖 Descripción del proyecto

**Librería Shiro** es una aplicación web desarrollada con React que simula una librería digital donde los usuarios pueden explorar diferentes categorías literarias.

El proyecto tiene como objetivo implementar la comunicación entre una aplicación frontend y una API REST simulada mediante **Mock Service Worker (MSW)**.

La aplicación permite consultar categorías de libros mediante solicitudes HTTP, visualizar los resultados dinámicamente y gestionar diferentes situaciones asociadas al consumo de APIs, como errores del servidor, solicitudes fallidas y tiempos de respuesta.

Además, incorpora un mecanismo de caché en memoria para evitar consultas innecesarias y mejorar la eficiencia de la aplicación.

El proyecto fue desarrollado como parte de la asignatura **Desarrollo Frontend II (PFY2202)** de Duoc UC, correspondiente a la actividad formativa de la semana 4.

---

## 🎯 Objetivos

### Objetivo general

Desarrollar una aplicación frontend utilizando React que permita consumir una API REST simulada, implementando mecanismos de gestión de datos, control de carga, manejo de errores y optimización de solicitudes HTTP.

### Objetivos específicos

- Implementar una aplicación React utilizando Vite.
- Configurar la navegación mediante React Router.
- Simular una API REST utilizando Mock Service Worker.
- Consumir información mediante la Fetch API.
- Utilizar operaciones asíncronas con `async` y `await`.
- Administrar los datos obtenidos mediante hooks de React.
- Implementar indicadores de carga durante las solicitudes.
- Gestionar respuestas HTTP correctas y fallidas.
- Incorporar mecanismos de recuperación ante errores.
- Cancelar solicitudes innecesarias mediante `AbortController`.
- Implementar una caché en memoria para optimizar las consultas.
- Organizar el código mediante componentes y servicios reutilizables.
- Aplicar estilos CSS personalizados y diseño responsive.

---

## 🚀 Funcionalidades

### 🏠 Página de inicio

La página principal presenta Librería Shiro y proporciona acceso a la exploración de categorías.

Incluye una identidad visual inspirada en las librerías tradicionales, utilizando colores cálidos, tipografía serif y una ilustración decorativa de libros construida mediante CSS.

El diseño utiliza una combinación de verde bosque, marfil, café oscuro y detalles dorados.

### 📚 Exploración de categorías

La aplicación permite consultar seis categorías de libros:

| ID | Categoría |
|---|---|
| 1 | Ficción |
| 2 | Ciencia ficción |
| 3 | Fantasía |
| 4 | Historia |
| 5 | Tecnología |
| 6 | Misterio |

Las categorías no se encuentran definidas directamente dentro del componente React encargado de mostrarlas.

La información se obtiene mediante una petición HTTP a una API REST simulada con MSW.

Los resultados se presentan utilizando tarjetas dinámicas que se adaptan a diferentes tamaños de pantalla.

### 🌐 Integración REST

La aplicación realiza solicitudes HTTP utilizando `fetch()`.

El endpoint implementado es:

```http
GET /api/categorias
```

MSW intercepta la solicitud y devuelve una respuesta JSON que contiene las categorías disponibles.

Esta implementación permite simular la comunicación con un backend sin necesidad de disponer de un servidor real.

### ⏳ Indicador de carga

Mientras se procesa una solicitud HTTP, la aplicación muestra un mensaje informativo:

**Cargando categorías...**

El indicador desaparece cuando la solicitud termina correctamente o cuando se produce un error.

Para facilitar su comprobación, el backend simulado incorpora un retraso aproximado de 1,2 segundos.

### ⚠️ Manejo de errores

La aplicación contempla diferentes situaciones de error.

| Situación | Comportamiento |
|---|---|
| HTTP 200 | Muestra las categorías disponibles. |
| HTTP 404 | Informa que no se encontraron las categorías solicitadas. |
| HTTP 500 | Informa que el servidor presenta un problema temporal. |
| Error de conexión | Muestra un mensaje relacionado con la imposibilidad de conectar con el servicio. |
| Respuesta con formato incorrecto | Informa de un problema al obtener los datos. |

Los errores se gestionan mediante `try`, `catch` y comprobaciones del estado HTTP de las respuestas.

La aplicación evita mostrar directamente al usuario detalles técnicos inesperados de las excepciones.

### 🔄 Recuperación ante errores

Cuando se produce un error, la interfaz proporciona dos alternativas:

- **Reintentar:** realiza nuevamente la solicitud HTTP.
- **Volver al inicio:** permite abandonar la pantalla y regresar a la página principal.

Estas opciones permiten continuar navegando sin depender exclusivamente de que la siguiente solicitud sea correcta.

### ⚡ Optimización de consultas

La aplicación incorpora una caché en memoria para almacenar las categorías obtenidas correctamente.

Cuando el usuario consulta las categorías por primera vez, se realiza una solicitud HTTP.

Si posteriormente