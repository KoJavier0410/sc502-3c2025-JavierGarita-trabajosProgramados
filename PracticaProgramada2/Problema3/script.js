let productos = [];

document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let precio = parseFloat(document.getElementById("precio").value);
    let categoria = document.getElementById("categoria").value;

    if (nombre === "" || isNaN(precio) || precio <= 0) {
        alert("Por favor, ingrese un nombre válido y un precio mayor a 0.");
        return;
    }

    let producto = { nombre, precio, categoria };
    productos.push(producto);
    actualizarLista();

    document.getElementById("productForm").reset();
});

function actualizarLista(filtro = "Todos") {
    let listaProductos = document.getElementById("listaProductos");
    listaProductos.innerHTML = "";

    productos.forEach((producto, index) => {
        if (filtro === "Todos" || producto.categoria === filtro) {
            let item = document.createElement("li");
            item.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
            item.innerHTML = `
                ${producto.nombre} - ₡${producto.precio.toLocaleString()} <span class="badge bg-secondary">${producto.categoria}</span>
                <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
            `;
            listaProductos.appendChild(item);
        }
    });
}

function eliminarProducto(index) {
    productos.splice(index, 1);
    actualizarLista(document.getElementById("filtroCategoria").value);
}

function filtrarProductos() {
    let categoriaSeleccionada = document.getElementById("filtroCategoria").value;
    actualizarLista(categoriaSeleccionada);
}