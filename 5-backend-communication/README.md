# 5. Comunicación con backend

Objetivo: entender cómo el frontend habla con un backend.

## Ejercicio 1: login simulado

Crear un formulario con:

- email
- password

Simular una respuesta:

```js
{
  accessValue: "valor-de-sesion-de-ejemplo",
  user: {
    id: 1,
    name: "Ada"
  }
}
```

## Ejercicio 2: token

Guardar el token y usarlo en una request con header:

```js
Authorization: `Bearer ${token}`;
```

## Ejercicio 3: errores del backend

Simular errores como:

- email requerido
- password incorrecto
- sesión expirada
