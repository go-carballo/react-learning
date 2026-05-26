/*
Creá un archivo `users.js` y resolvé:

1. Crear un array de usuarios con `id`, `name`, `email` y `active`.
2. Mostrar solo los nombres usando `.map()`.
3. Filtrar usuarios activos usando `.filter()`.
4. Buscar un usuario por `id` usando `.find()`.*/

// 1. Crear un array de usuarios
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', active: true },
  { id: 2, name: 'Bob', email: 'bob@example.com', active: false },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', active: true },
  { id: 4, name: 'David', email: 'david@example.com', active: false }
];

// 2. Mostrar solo los nombres usando .map()
const userNames = users.map(user => user.name);
console.log('Nombres de usuarios:', userNames);

// 3. Filtrar usuarios activos usando .filter()
const activeUsers = users.filter(user => user.active);
console.log('Usuarios activos:', activeUsers);

// 4. Buscar un usuario por id usando .find()
const userIdToFind = 2;
const foundUser = users.find(user => user.id === userIdToFind);
console.log(`Usuario con id ${userIdToFind}:`, foundUser);


