# 📚 Librería Shiro

**Historias que dejan huella.** 🐶

Aplicación web desarrollada con React que permite explorar categorías literarias mediante la integración con una API REST simulada utilizando Mock Service Worker (MSW).

**Repositorio:** https://github.com/PanshoOw/Libreria-Shiro

---

## 📖 Descripción del proyecto

**Librería Shiro** es una aplicación web que simula una librería digital, permitiendo a los usuarios explorar diferentes categorías de libros mediante una interfaz sencilla, intuitiva y adaptable a distintos dispositivos.

Su principal objetivo es demostrar la integración entre una aplicación frontend desarrollada con React y una API REST simulada mediante **Mock Service Worker (MSW)**.

El proyecto incorpora solicitudes HTTP, gestión de operaciones asíncronas, indicadores de carga, manejo de errores y un mecanismo de caché en memoria para optimizar el consumo de datos.

Fue desarrollado como parte de la asignatura **Desarrollo Frontend II (PFY2202)** de Duoc UC, correspondiente a la evaluación formativa de la semana 4.

---

## 🎯 Objetivos

### Objetivo general

Desarrollar una aplicación frontend utilizando React que permita consumir una API REST simulada, implementando mecanismos de obtención de datos, manejo de errores, control de carga y optimización de solicitudes HTTP.

### Objetivos específicos

- Implementar una aplicación web utilizando React y Vite.
- Configurar la navegación mediante React Router.
- Simular una API REST utilizando Mock Service Worker.
- Consumir información mediante la Fetch API.
- Gestionar operaciones asíncronas con `async` y `await`.
- Administrar estados mediante los hooks `useState` y `useEffect`.
- Incorporar indicadores visuales durante las solicitudes HTTP.
- Manejar respuestas HTTP correctas y fallidas.
- Implementar opciones de recuperación ante errores.
- Cancelar solicitudes mediante `AbortController`.
- Optimizar el consumo de datos utilizando una caché en memoria.
- Organizar la aplicación mediante componentes y servicios.
- Desarrollar una interfaz responsive utilizando CSS.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| React 19 | Desarrollo de la interfaz mediante componentes. |
| JavaScript | Implementación de la lógica de la aplicación. |
| Vite 8 | Herramienta de desarrollo y compilación. |
| React Router 8 | Administración de rutas y navegación. |
| Mock Service Worker 3 | Simulación de una API REST. |
| Fetch API | Realización de solicitudes HTTP. |
| HTML5 | Estructura semántica del contenido. |
| CSS3 | Estilos personalizados y diseño responsive. |
| ESLint | Análisis estático y calidad del código. |
| Git y GitHub | Control de versiones y repositorio del proyecto. |

---

## 🚀 Funcionalidades principales

### 🏠 Página de inicio

La aplicación presenta una página de bienvenida con la identidad visual de Librería Shiro y un enlace para explorar las categorías disponibles.

Su diseño está inspirado en las librerías tradicionales, utilizando colores cálidos, tipografía serif y elementos decorativos desarrollados mediante CSS.

### 📚 Exploración de categorías

Los usuarios pueden consultar seis categorías literarias:

| ID | Categoría |
|---|---|
| 1 | Ficción |
| 2 | Ciencia ficción |
| 3 | Fantasía |
| 4 | Historia |
| 5 | Tecnología |
| 6 | Misterio |

Estas categorías son proporcionadas por la API REST simulada.

El componente React responsable de mostrarlas no contiene directamente los datos, sino que los obtiene mediante una solicitud HTTP.

### 🌐 Integración REST

La aplicación utiliza `fetch()` para consultar el siguiente endpoint:

```http
GET /api/categorias
```

MSW intercepta la solicitud y devuelve una respuesta JSON que contiene las categorías disponibles.

Ejemplo de respuesta:

```json
{
  "categorias": [
    { "id": "1", "nombre": "Ficción" },
    { "id": "2", "nombre": "Ciencia ficción" },
    { "id": "3", "nombre": "Fantasía" },
    { "id": "4", "nombre": "Historia" },
    { "id": "5", "nombre": "Tecnología" },
    { "id": "6", "nombre": "Misterio" }
  ]
}
```

Esta implementación permite simular la comunicación con un backend sin necesidad de desarrollar un servidor real.

### ⏳ Indicador de carga

Mientras se realiza una solicitud HTTP, la aplicación muestra el mensaje:

**Cargando categorías...**

El backend simulado incorpora un retraso aproximado de 1,2 segundos para facilitar la comprobación del estado de carga.

Una vez finalizada la solicitud, la interfaz muestra los resultados o el mensaje de error correspondiente.

### ⚠️ Manejo de errores HTTP

La aplicación contempla distintos escenarios asociados a las solicitudes REST.

| Código o situación | Comportamiento |
|---|---|
| `200 OK` | Muestra las categorías disponibles. |
| `404 Not Found` | Informa que no se encontraron las categorías solicitadas. |
| `500 Internal Server Error` | Informa que el servidor presenta un problema temporal. |
| Error de conexión | Muestra un mensaje indicando que no fue posible conectar con el servicio. |
| Formato de respuesta inválido | Informa que no fue posible procesar correctamente los datos. |

La gestión de errores se implementa mediante bloques `try/catch` y validaciones de las respuestas HTTP.

### 🔄 Recuperación ante errores

Cuando ocurre un error, la aplicación ofrece dos alternativas:

- **Reintentar:** ejecuta nuevamente la solicitud HTTP.
- **Volver al inicio:** permite regresar a la página principal mediante React Router.

Estas opciones permiten que el usuario continúe navegando sin quedar limitado a una pantalla de error.

### ⚡ Optimización mediante caché

La aplicación utiliza una caché en memoria para almacenar las categorías obtenidas correctamente.

Durante la primera consulta se realiza una solicitud HTTP a la API.

Cuando el usuario regresa posteriormente a la página de categorías, los datos pueden recuperarse desde la memoria sin efectuar una nueva solicitud.

Este mecanismo permite:

- Reducir solicitudes HTTP repetidas.
- Disminuir tiempos de espera.
- Reutilizar información previamente obtenida.
- Mejorar la eficiencia de la navegación.

La caché almacena únicamente los resultados correctos de la consulta normal.

Las respuestas de error no se almacenan.

**Limitación:** la caché no incorpora persistencia ni expiración automática. Al recargar completamente la aplicación, los datos almacenados en memoria se pierden.

### 🧭 Navegación

La aplicación utiliza React Router para administrar las siguientes rutas:

| Ruta | Descripción |
|---|---|
| `/` | Página de inicio. |
| `/categorias` | Exploración de categorías. |
| `*` | Página no encontrada. |

Las rutas inexistentes muestran una página de error 404 con una alternativa para regresar al inicio.

---

## 📂 Estructura del proyecto

La aplicación organiza sus componentes, páginas y servicios mediante la siguiente estructura:

```text
libreria-shiro/
│
├── public/
│   └── mockServiceWorker.js
│
├── src/
│   ├── components/
│   │   └── MenuNavegacion.jsx
│   │
│   ├── mocks/
│   │   ├── browser.js
│   │   └── handlers.js
│   │
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── Categorias.jsx
│   │   └── PaginaNoEncontrada.jsx
│   │
│   ├── services/
│   │   └── categoriasService.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

### Organización de responsabilidades

**`components/`**

Contiene los componentes reutilizables de la interfaz, como el menú de navegación.

**`pages/`**

Contiene las páginas principales de la aplicación.

**`mocks/`**

Contiene los handlers y la configuración necesaria para simular las respuestas HTTP mediante MSW.

**`services/`**

Centraliza la comunicación con la API REST, el procesamiento de respuestas y la gestión de la caché.

Esta organización permite separar la presentación de los datos de la lógica responsable de obtenerlos.

---

## ⚙️ Instalación y ejecución

### Requisitos previos

Para ejecutar el proyecto se requiere:

- Node.js 20.19+ o 22.12+, o una versión posterior compatible con Vite.
- npm.
- Un navegador moderno, como Google Chrome, Microsoft Edge o Firefox.
- Un editor de código, preferentemente Visual Studio Code.

### 1. Clonar el repositorio

Abrir una terminal y ejecutar:

```bash
git clone https://github.com/PanshoOw/Libreria-Shiro.git
```

### 2. Ingresar al directorio del proyecto

```bash
cd Libreria-Shiro
```

### 3. Instalar las dependencias

```bash
npm install
```

Este comando instalará las dependencias necesarias, incluyendo React, React Router, Vite y MSW.

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Vite mostrará una dirección local para acceder a la aplicación.

Generalmente:

```text
http://localhost:5173/
```

Si el puerto 5173 se encuentra ocupado, Vite puede utilizar otro puerto.

### 5. Acceder a las categorías

Desde la página principal, seleccionar **Explorar categorías**.

También es posible acceder directamente a:

```text
http://localhost:5173/categorias
```

La aplicación consultará la API REST simulada y mostrará las categorías disponibles.

### Importante: funcionamiento de MSW

La aplicación activa Mock Service Worker únicamente durante el desarrollo.

Por este motivo, **para comprobar todas las funcionalidades relacionadas con la API REST debe ejecutarse mediante `npm run dev`**.

Actualmente, la compilación de producción no activa el backend simulado.

---

## 🌐 Configuración de la API REST simulada

La integración utiliza Mock Service Worker para interceptar las solicitudes HTTP realizadas desde el navegador.

### `src/mocks/handlers.js`

Define los endpoints y las respuestas simuladas.

El endpoint principal es:

```http
GET /api/categorias
```

También permite simular respuestas HTTP 404 y 500 utilizando parámetros de consulta.

### `src/mocks/browser.js`

Configura el Service Worker mediante `setupWorker()` y registra los handlers disponibles.

### `public/mockServiceWorker.js`

Contiene el Service Worker utilizado por MSW para interceptar solicitudes HTTP.

Este archivo fue generado mediante:

```bash
npx msw init public/ --save
```

Debe conservarse dentro del proyecto.

### `src/main.jsx`

Inicializa MSW durante el desarrollo antes de renderizar la aplicación React.

Esto permite que el Service Worker esté preparado para interceptar las solicitudes HTTP iniciales.

### `src/services/categoriasService.js`

Centraliza la lógica de comunicación con el endpoint.

Sus responsabilidades incluyen:

- Ejecutar solicitudes HTTP.
- Comprobar los códigos de respuesta.
- Procesar información JSON.
- Validar la estructura de los datos.
- Administrar la caché en memoria.
- Permitir la cancelación de solicitudes mediante `AbortController`.

---

## 🧪 Pruebas funcionales

La aplicación incorpora escenarios de simulación para comprobar el consumo de datos, los indicadores de carga y el manejo de errores.

**Antes de comenzar:** ejecutar el proyecto con `npm run dev`.

### Prueba 1: Respuesta correcta — HTTP 200

Acceder a:

```text
http://localhost:5173/categorias
```

**Resultado esperado:**

1. Se muestra el indicador de carga.
2. MSW responde con HTTP 200.
3. Se muestran las seis categorías.
4. El indicador de carga desaparece.

### Prueba 2: Recurso inexistente — HTTP 404

Acceder a:

```text
http://localhost:5173/categorias?simular=404
```

**Resultado esperado:**

1. Se ejecuta una solicitud HTTP.
2. MSW devuelve una respuesta 404.
3. La aplicación informa que no se encontraron las categorías.
4. Se muestran los botones **Reintentar** y **Volver al inicio**.

### Prueba 3: Error del servidor — HTTP 500

Acceder a:

```text
http://localhost:5173/categorias?simular=500
```

**Resultado esperado:**

1. Se ejecuta una solicitud HTTP.
2. MSW devuelve una respuesta 500.
3. La aplicación informa que el servidor presenta un problema temporal.
4. Se muestran las alternativas de recuperación.

### Prueba 4: Reintento de una solicitud

Desde una pantalla de error, seleccionar **Reintentar**.

**Resultado esperado:**

La aplicación muestra nuevamente el indicador de carga y repite la solicitud HTTP.

Si continúa activo el parámetro de simulación de error, la API devolverá nuevamente el código configurado.

### Prueba 5: Recuperación ante errores

Desde una pantalla de error, seleccionar **Volver al inicio**.

Posteriormente, ingresar nuevamente a Categorías.

**Resultado esperado:**

La aplicación vuelve a mostrar correctamente las seis categorías.

### Prueba 6: Optimización de consultas

1. Abrir las herramientas de desarrollo del navegador mediante F12.
2. Ingresar a la pestaña **Network**.
3. Seleccionar el filtro **Fetch/XHR**.
4. Acceder a Categorías y esperar una respuesta correcta.
5. Regresar a Inicio.
6. Volver a Categorías.

**Resultado esperado:**

Después de una consulta correcta, la aplicación reutiliza los datos almacenados en caché y evita realizar otra petición HTTP al regresar a la misma página.

Durante el desarrollo, React StrictMode puede provocar solicitudes iniciales adicionales que son canceladas. Esto debe distinguirse de las consultas realizadas al volver a una página.

### Prueba 7: Navegación

Comprobar:

- Acceso a la página principal.
- Acceso a Categorías.
- Navegación mediante el menú.
- Funcionamiento del botón Volver al inicio.
- Visualización de la página 404 cuando se accede a una ruta inexistente.

### Prueba 8: Diseño responsive

Utilizar las herramientas de desarrollo del navegador para comprobar la adaptación de la interfaz a diferentes resoluciones.

Verificar especialmente:

- Encabezado y menú de navegación.
- Página principal.
- Tarjetas de categorías.
- Mensajes de error.
- Botones de recuperación.

---

## 🧩 Arquitectura de integración

La comunicación entre las distintas partes de la aplicación sigue este flujo:

```text
                  Usuario
                     |
                     v
               Categorias.jsx
                     |
                     v
            categoriasService.js
                     |
                     v
              ¿Existe caché?
                /       \
              Sí         No
              |           |
              v           v
       Reutilizar      Fetch API
          datos            |
                           v
                     Solicitud HTTP
                           |
                           v
                      MSW / API
                           |
                           v
                     Respuesta JSON
                           |
                           v
                   Procesar respuesta
                           |
                           v
                    Actualizar React
                           |
                           v
                    Mostrar resultado
```

### Separación de responsabilidades

**Interfaz de usuario:** React administra la presentación de las categorías, los estados de carga y los mensajes de error.

**Servicio de categorías:** centraliza las solicitudes HTTP, procesa las respuestas y administra la caché.

**API REST simulada:** MSW intercepta las peticiones y devuelve las respuestas configuradas.

Esta arquitectura facilita la organización del código y permite modificar la fuente de datos sin tener que reescribir completamente los componentes de presentación.

---

## 🎨 Diseño visual

Librería Shiro utiliza una estética inspirada en las librerías tradicionales.

La interfaz combina colores cálidos, tipografía serif y una ilustración decorativa de libros construida mediante CSS.

### Paleta de colores

| Color | Código |
|---|---|
| Marfil | `#F7F3EC` |
| Café oscuro | `#382D26` |
| Verde bosque | `#355748` |
| Burdeos | `#783F46` |
| Dorado envejecido | `#C49A60` |
| Blanco cálido | `#FFFDF8` |

La aplicación utiliza Flexbox, CSS Grid y media queries para adaptar la presentación a diferentes tamaños de pantalla.

---

## ♿ Accesibilidad

La aplicación incorpora prácticas básicas de accesibilidad:

- Uso de elementos HTML semánticos.
- Navegación mediante enlaces de React Router.
- Botones para ejecutar acciones.
- Identificación de la ruta activa en el menú.
- Comunicación del estado de carga mediante `output`.
- Mensajes de error mediante `role="alert"`.
- Identificación de elementos decorativos mediante `aria-hidden`.
- Consideración de las preferencias de movimiento reducido.
- Adaptación de la interfaz a diferentes resoluciones.

---

## 🔍 Calidad del código

El proyecto utiliza ESLint para detectar posibles problemas de calidad en el código fuente.

### Ejecutar el análisis estático

```bash
npm run lint
```

### Generar la compilación

```bash
npm run build
```

La compilación genera los archivos de producción en la carpeta `dist`.

### Vista previa de producción

```bash
npm run preview
```

**Advertencia:** aunque la aplicación puede compilarse y visualizarse en modo de producción, actualmente MSW se inicializa únicamente durante el desarrollo. Por tanto, la vista previa de producción no permite comprobar correctamente la carga de categorías desde la API simulada.

Para evaluar la integración REST debe utilizarse `npm run dev`.

---

## 📌 Alcance y limitaciones

La aplicación fue desarrollada con fines académicos para demostrar la integración entre frontend y backend mediante servicios REST simulados.

Por tanto, presenta las siguientes características:

- No utiliza un backend real.
- No incorpora una base de datos.
- Las categorías corresponden a información de demostración.
- La caché se mantiene únicamente en memoria.
- No incorpora autenticación de usuarios.
- No dispone de carrito de compras.
- No permite realizar compras ni procesar pagos.
- No incluye un catálogo individual de libros.
- MSW se encuentra habilitado exclusivamente durante el desarrollo.

Estas características corresponden al alcance definido para la actividad formativa.

---

## 📚 Información académica

| Campo | Información |
|---|---|
| Institución | Duoc UC |
| Carrera | Analista Programador |
| Asignatura | Desarrollo Frontend II |
| Código | PFY2202 |
| Experiencia de aprendizaje | 2 |
| Semana | 4 |
| Evaluación | Formativa 3 |
| Modalidad | Individual |

---

## 🔗 Repositorio

El código fuente del proyecto se encuentra disponible en:

**GitHub:** https://github.com/PanshoOw/Libreria-Shiro

---

### 🐶 Librería Shiro

**Historias que dejan huella.**

Proyecto académico desarrollado para aplicar conocimientos de React, integración REST, simulación de servicios HTTP y optimización de consultas.