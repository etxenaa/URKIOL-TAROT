document.addEventListener("DOMContentLoaded", function () {

    const contenedor = document.querySelector(".vacia");
    let cantidadCompra = document.getElementById("cantidad2");

    const cesta = JSON.parse(localStorage.getItem("cesta")) || [];

    const resumen = document.querySelector(".resumen");
    const producto = document.querySelector(".producto");

    const subtotal = document.querySelector(".precioSubtotal");
    const subtotal2 = document.querySelector("#mostrarSub");
    const totalPrecio = document.getElementById('precioTotal');

    const productoId = parseInt(producto.dataset.id);

    const index = cesta.findIndex(p => p.id === productoId);

    if (index === -1) {
        contenedor.style.display = "flex";
        resumen.style.display = "none";
        producto.style.display = "none";
    }
    else {
        contenedor.style.display = "none";
        resumen.style.display = "flex";
        producto.style.display = "flex";
    }


    cesta.forEach(producto => {
        cantidadCompra.innerHTML = producto.cantidad;
        subtotal.innerHTML = producto.cantidad * producto.precio + "€";
        subtotal2.innerHTML = producto.cantidad * producto.precio + "€";
        totalPrecio.innerHTML = (producto.cantidad * producto.precio + 5) + "€";
    });

    document.getElementById("plus").addEventListener("click", function () {
        cantidadCompra.innerHTML = parseInt(cantidadCompra.innerHTML) + 1;
        cesta[index].cantidad = parseInt(cantidadCompra.innerHTML);
        localStorage.setItem("cesta", JSON.stringify(cesta));
        window.location.reload();
    });

    document.getElementById("minus").addEventListener("click", function () {
        if (parseInt(cantidadCompra.innerHTML) > 1) {
            cantidadCompra.innerHTML = parseInt(cantidadCompra.innerHTML) - 1;
            cesta[index].cantidad = parseInt(cantidadCompra.innerHTML);
            localStorage.setItem("cesta", JSON.stringify(cesta));
            window.location.reload();
        } else {
            contenedor.style.display = "flex";
            resumen.style.display = "none";
            producto.style.display = "none";
            localStorage.removeItem("cesta");
            location.reload();
        }
    });
});
