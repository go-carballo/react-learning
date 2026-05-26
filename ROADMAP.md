# Frontend Learning Roadmap

Este proyecto está organizado para aprender frontend paso a paso.

## Orden recomendado

1. **JavaScript basics**
2. **React basics**
3. **Consumo de APIs**
4. **Manejo de estado**
5. **Comunicación con backend**

La idea es no saltar directo a herramientas grandes. Primero entendé bien el lenguaje, después React, y recién ahí APIs y estado más avanzado.

---

## 1. JavaScript basics

Carpeta: `1-js-basics/`

Objetivo: entender el lenguaje que usa React.

Temas:

- `let` y `const`
- funciones
- arrays
- objetos
- destructuring
- `map`, `filter`, `find`, `reduce`
- módulos con `import` y `export`
- promesas
- `async / await`
- `try / catch`

Ejercicios sugeridos:

- Crear una lista de usuarios y recorrerla con `.map()`.
- Filtrar usuarios activos con `.filter()`.
- Buscar un usuario por id con `.find()`.
- Simular una llamada async con `Promise`.

---

## 2. React basics

Carpeta: `2-react-basics/`

Objetivo: aprender cómo React construye interfaces usando componentes y estado.

Temas:

- componentes
- JSX
- props
- `useState`
- eventos
- renderizado condicional
- listas
- formularios
- `useEffect`

Ejercicios sugeridos:

- Crear un contador.
- Crear una lista de tareas.
- Crear un formulario controlado.
- Mostrar contenido condicional según estado.

---

## 3. Consumo de APIs

Carpeta: `3-api-consumption/`

Objetivo: pedir datos externos y mostrarlos en pantalla.

Temas:

- `fetch`
- `async / await`
- estado `loading`
- estado `error`
- renderizar datos recibidos
- `GET`, `POST`, `PUT`, `PATCH`, `DELETE`

Ejercicios sugeridos:

- Traer posts desde `https://jsonplaceholder.typicode.com/posts`.
- Mostrar loading mientras carga.
- Mostrar error si falla la request.
- Crear un formulario que mande un `POST` falso.

---

## 4. Manejo de estado

Carpeta: `4-state-management/`

Objetivo: entender cómo se comparte y organiza la información en una app.

Temas:

- estado local con `useState`
- pasar datos con props
- levantar estado al componente padre
- `useContext`
- cuándo usar una store externa
- introducción a Zustand o Redux Toolkit
- introducción a TanStack Query para estado del servidor

Ejercicios sugeridos:

- Crear carrito de compras simple.
- Compartir usuario logueado con Context.
- Separar estado local de datos del backend.

---

## 5. Comunicación con backend

Carpeta: `5-backend-communication/`

Objetivo: conectar el frontend con un backend real o simulado.

Temas:

- APIs REST
- JSON
- headers
- tokens
- login/logout
- manejo de errores del servidor
- refrescar datos después de crear, editar o borrar

Ejercicios sugeridos:

- Crear login simulado.
- Guardar token en memoria o localStorage.
- Enviar requests con Authorization header.
- Mostrar errores de validación del backend.

---

## Cómo practicar

Para levantar el proyecto:

```bash
npm run dev
```

Archivos principales para empezar:

- `src/App.jsx`
- `src/App.css`
- `src/main.jsx`

Consejo: hacé ejercicios chicos. Si algo no lo podés explicar en voz alta, todavía no lo entendiste del todo.
