document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cerrar").addEventListener("click", function () {
        document.querySelector(".Añadir").style.display = "none";
    });

    let cantidadCompra = document.getElementById("cantidad");

    cantidadCompra.innerHTML = 1;

    const cesta = JSON.parse(localStorage.getItem("cesta")) || [];

    document.getElementById("plus").addEventListener("click", function () {
        cantidadCompra.innerHTML = parseInt(cantidadCompra.innerHTML) + 1;
    });
    document.getElementById("minus").addEventListener("click", function () {
        if (parseInt(cantidadCompra.innerHTML) > 1) {
            cantidadCompra.innerHTML = parseInt(cantidadCompra.innerHTML) - 1;
        }
    });
});

const producto = {
    id: 1,
    precio: 25,
    cantidad: 1
};

function añadirACesta(producto) {
    let cesta = JSON.parse(localStorage.getItem("cesta")) || [];

    const cantidadSeleccionada = parseInt(document.getElementById("cantidad").innerHTML);
    let precio = cantidadSeleccionada * producto.precio;

    document.querySelector(".Añadir").style.display = "flex";
    document.getElementById("mostrarCantidad").innerHTML = cantidadSeleccionada + " unitate";
    document.getElementById("mostrarPrecio").innerHTML = precio + "€";
    document.getElementById("precioTotal").innerHTML = (precio + 5) + "€";

    const index = cesta.findIndex(p => p.id === producto.id);
    if (index !== -1) {
        document.querySelector(".Añadir").style.display = "flex";
        cesta.forEach(producto => {
            if (window.location.pathname.includes("compra.html")) {
                document.getElementById("mostrarCantidad").innerHTML = (cantidadSeleccionada + producto.cantidad) + " unidad/es";
                document.getElementById("mostrarPrecio").innerHTML = (producto.cantidad * producto.precio + precio) + "€";
                document.getElementById("precioTotal").innerHTML = (producto.cantidad * producto.precio + precio + 5) + "€";
            } else{
                document.getElementById("mostrarCantidad").innerHTML = (cantidadSeleccionada + producto.cantidad) + " unitate";
                document.getElementById("mostrarPrecio").innerHTML = (producto.cantidad * producto.precio + precio) + "€";
                document.getElementById("precioTotal").innerHTML = (producto.cantidad * producto.precio + precio + 5) + "€";
            }
        });
        cesta[index].cantidad += cantidadSeleccionada;
    } else {
        let nuevoProducto = { ...producto, cantidad: cantidadSeleccionada };
        cesta.push(nuevoProducto);
    }

    localStorage.setItem("cesta", JSON.stringify(cesta)); S
}

function cambiarImagen(miniatura) {
    let fondoMini = window.getComputedStyle(miniatura).backgroundImage;
    let rutaMini = fondoMini.split(',')[0].replace(/url\(["']?(.*?)["']?\)/, '$1');

    let imagenGrande = document.querySelector(".compraImg");
    let rutaGrande = imagenGrande.src;

    imagenGrande.src = rutaMini;
    miniatura.style.backgroundImage = `url('${rutaGrande}')`;
}
