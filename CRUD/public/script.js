// const listEl = document.getElementById("list");
// const idInput = document.getElementById("id");
// const nameInput = document.getElementById("name");

// document.getElementById("loadBtn").addEventListener("click", load);
// document.getElementById("addBtn").addEventListener("click", add);
// document.getElementById("updateBtn").addEventListener("click", update);

// async function load() {
//   const res = await fetch("/users");
//   const data = await res.json();

//   listEl.innerHTML = data.map(u =>
//     `<li>ID: ${u.id} | Name: ${u.name}
//       <button onclick="deleteUser('${u.id}')">delete this user </button>
//     </li>`
//   ).join("");
// }


// // listEl.innerHTML = data.map(u =>
// //     `<li>${u.name} 
// //       <button onclick="deleteUser('${u.id}')">delete this user </button>
// //     </li>`
// //   ).join("");

// async function add() {
//   const id = idInput.value.trim();
//   const name = nameInput.value.trim();


//   await fetch("/users", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({id ,  name })
//   });

//   nameInput.value = "";
//   clear();
//   load();
// }

// async function deleteUser(id) {
//   await fetch("/users/" + id, {
//     method: "DELETE"
//   });

//   load();
// }


const listEl = document.getElementById("list");
const idInput = document.getElementById("id");
const nameInput = document.getElementById("name");

document.getElementById("loadBtn").addEventListener("click", load);
document.getElementById("addBtn").addEventListener("click", add);
document.getElementById("updateBtn").addEventListener("click", update);
const idarray  = [];

async function load() {
  const res = await fetch("/users");
  const data = await res.json();

  listEl.innerHTML = data.map(u =>
    `<li>ID: ${u.id} | Name: ${u.name}
      <button onclick="deleteUser('${u.id}')">Delete</button>
    </li>`
  ).join("");
}

async function add() {
  const id = idInput.value.trim();
  const name = nameInput.value.trim();

  if (!id || !name) {
    alert("ID and Name required");
    return;
  }

  if (idarray.includes(id)) {
    alert("ID already exists");
    return;
  }

  idarray.push(id);

  await fetch("/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, name })
  });

  clear();
  load();
}


async function update() {
  const id = idInput.value.trim();
  const name = nameInput.value.trim();

  if (!id || !name) {
    alert("ID and Name required");
    return;
  }

  await fetch("/users/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, name })
  });

  clear();
  load();
}

async function deleteUser(id) {
  await fetch("/users/" + id, {
    method: "DELETE"
  });

  load();
}

function clear() {
  idInput.value = "";
  nameInput.value = "";
}
