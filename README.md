# React Learning

Proyecto de práctica para aprender React paso a paso: estado, formularios, consumo de APIs, Context y comunicación simulada con backend.

La idea del repo es simple: cada ejercicio introduce un concepto nuevo y lo conecta con el anterior. El ejemplo activo en `src/App.jsx` va cambiando a medida que avanzás.

## Ruta rápida

```bash
npm install
npm run dev
```

Abrí la URL que muestra Vite en la terminal, normalmente:

```text
http://localhost:5173
```

Para verificar que todo compile:

```bash
npm run build
```

## Qué estás practicando

| Módulo | Tema | Qué aprendés |
|---|---|---|
| `1-js-basics` | JavaScript asincrónico | `Promise`, `setTimeout`, `async/await` |
| `2-react-basics` | React básico | `useState`, eventos, listas, formularios |
| `3-api-consumption` | Consumo de APIs | `useEffect`, `fetch`, loading, error, `POST` |
| `4-state-management` | Manejo de estado | estado en `App`, props, componentes, Context |
| `5-backend-communication` | Backend simulado | login, token, headers, errores del backend |

## Ejemplo activo

Actualmente `src/App.jsx` contiene el ejercicio de **login simulado con errores de backend**.

Probá estos casos:

| Acción | Resultado esperado |
|---|---|
| Enviar sin email | `Email requerido` |
| Usar password distinto de `123456` | `Password incorrecto` |
| Usar cualquier email + password `123456` | sesión iniciada |
| Click en `Hacer request privada` | muestra header `Authorization` |
| Click en `Simular sesión expirada` | `Sesión expirada` |

El flujo simula esta respuesta de backend:

```js
{
  accessValue: "valor-de-sesion-de-ejemplo",
  user: {
    id: 1,
    name: "Ada"
  }
}
```

Y después usa el token así:

```js
Authorization: `Bearer ${token}`
```

## Ejercicios realizados

### 1. JavaScript básico

Archivos:

- `1-js-basics/fakeApi.js`
- `1-js-basics/users.js`

Conceptos:

- simular una API con `Promise`
- esperar resultados con `async/await`
- manejar errores con `try/catch`

Ejemplo conceptual:

```js
async function loadUsers() {
  try {
    const users = await getUsers();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}
```

### 2. React básico

Ejercicios construidos:

- contador con `useState`
- lista de tareas con `.map()`
- formulario controlado con nombre, email y mensaje

Conceptos clave:

- el estado cambia la UI
- los inputs controlados guardan su valor en React
- `.map()` convierte datos en JSX
- `.filter()` sirve para borrar elementos sin mutar el array original

### 3. Consumo de APIs

Ejercicios construidos:

- traer posts desde JSONPlaceholder
- mostrar loading y error
- seleccionar un post para ver detalle
- enviar un `POST` falso

API usada:

```text
https://jsonplaceholder.typicode.com/posts
```

Patrón usado:

```js
useEffect(() => {
  async function fetchPosts() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  fetchPosts();
}, []);
```

### 4. Manejo de estado

Ejercicios construidos:

- carrito simple
- componentes separados
- `UserContext` para usuario logueado

Componentes creados:

- `src/App.jsx`
- `src/ProductList.jsx`
- `src/Cart.jsx`
- `src/UserContext.jsx`
- `src/UserProfile.jsx`

Idea principal:

> Si varios componentes necesitan la misma información, el estado tiene que vivir en el componente padre común.

En el carrito:

- `App` guarda `cart`
- `ProductList` recibe productos y función para agregar
- `Cart` recibe carrito, total y función para quitar

El total no se guarda en estado porque es información derivada:

```js
const total = cart.reduce((sum, product) => sum + product.price, 0);
```

### 5. Comunicación con backend

Ejercicios construidos:

- login simulado
- guardar token
- usar token en header `Authorization`
- simular errores del backend

Errores simulados:

- `Email requerido`
- `Password incorrecto`
- `Sesión expirada`

Esto prepara el camino para reemplazar las funciones falsas por un backend real más adelante.

## Estructura del proyecto

```text
react-learning/
├── 1-js-basics/
│   ├── fakeApi.js
│   ├── users.js
│   └── README.md
├── 2-react-basics/
│   └── README.md
├── 3-api-consumption/
│   └── README.md
├── 4-state-management/
│   └── README.md
├── 5-backend-communication/
│   └── README.md
├── src/
│   ├── App.jsx
│   ├── Cart.jsx
│   ├── ProductList.jsx
│   ├── UserContext.jsx
│   ├── UserProfile.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── CUESTIONARIO.README
├── package.json
└── README.md
```

## Comandos útiles

| Comando | Para qué sirve |
|---|---|
| `npm run dev` | levanta el servidor de desarrollo |
| `npm run build` | compila el proyecto para producción |
| `npm run preview` | previsualiza el build |
| `npm run lint` | corre ESLint |

## Cuestionario

El archivo `CUESTIONARIO.README` contiene preguntas y respuestas sobre todos los ejercicios hechos.

Usalo para repasar antes de seguir con ejercicios más avanzados.

## Próximos pasos sugeridos

- Extraer el login a componentes separados.
- Crear un `AuthContext` real para usuario, token, login y logout.
- Persistir el token en `localStorage`.
- Reemplazar las funciones falsas por un backend real.
- Agregar rutas con React Router.
- Agregar tests simples para formularios y estado.
