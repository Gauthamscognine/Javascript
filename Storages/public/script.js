const url = "http://localhost:3030/items";

window.onload = loadItems;

// LOAD DATA
async function loadItems() {
    const res = await fetch(url);
    const items = await res.json();

    let list = document.getElementById("listid");
    list.innerHTML = "";

    items.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${item.id} : ${item.name}
            <button onclick="deleteItem(${item.id})">X</button>
        `;
        list.appendChild(li);
    });
}

// ✅ ADD USER
async function addItem() {
    let id = document.getElementById("idInput").value;
    let name = document.getElementById("nameInput").value;

    if (!id || !name) {
        alert("Enter ID and Name");
        return;
    }

    let res = await fetch(url);
    let items = await res.json();

    let exists = items.find(item => item.id == id);
    if (exists) {
        alert("ID already exists!");
        return;
    }

    await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id ,  name })
    });

    clearInputs();
    loadItems();
}

// ✅ UPDATE USER
async function updateItem() {
    let id = document.getElementById("idInput").value;
    let name = document.getElementById("nameInput").value;

    if (!id || !name) {
        alert("Enter ID and Name");
        return;
    }

    let res = await fetch(url);
    let items = await res.json();

    let exists = items.find(item => item.id == id);
    if (!exists) {
        alert("ID not found!");
        return;
    }

    await fetch(url + "/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id , name })
    });

    clearInputs();
    loadItems();
}

// DELETE USER
async function deleteItem(id) {
    await fetch(url + "/" + id, { method: "DELETE" });
    loadItems();
}

// UTILITY
function clearInputs() {
    document.getElementById("idInput").value = "";
    document.getElementById("nameInput").value = "";
}
