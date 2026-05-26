 function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Ana" },
        { id: 2, name: "Juan" },
        { id: 3, name: "Sofía" },
      ]);
    }, 1000);
  });
}

async function loadUsers() {
  try {
    const users = await getUsers();
    console.log(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
}

loadUsers();