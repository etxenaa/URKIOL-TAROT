document.addEventListener("DOMContentLoaded", function () {
    let cesta = JSON.parse(localStorage.getItem("cesta")) || [];
    let subtotalPrecio = document.getElementById("precioSub");
    let totalPrecio = document.getElementById("precioTot");

    let subtotalTotal = 0;

    cesta.forEach(producto => {
        subtotalTotal += producto.precio * producto.cantidad;
    });
    const checkbox = document.getElementById("miCheckbox");
    const empresaContainer = document.querySelector(".empresa-container");

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            empresaContainer.style.display = "flex";
        } else {
            empresaContainer.style.display = "none";
            document.getElementById("erroreaEmpresa").style.display = "none";
            document.getElementById("erroreaNif").style.display = "none";
        }
    });
    let envio = 5;
    let total = subtotalTotal + envio;

    subtotalPrecio.innerHTML = `${subtotalTotal}€`;
    totalPrecio.innerHTML = `${total}€`;

    document.getElementById("continuar").addEventListener("click", function () {
        const checkbox = document.getElementById("miCheckbox");
        const campos = [
            { id: "name", errorClass: ".erroreaIzena" },
            { id: "surname", errorClass: ".erroreaAbizena" },
            { id: "email", errorClass: ".erroreaEmaila" },
            { id: "dirección", errorClass: ".erroreaHelbidea" },
            { id: "code", errorClass: ".erroreaPostaKodea" },
            { id: "localidad", errorClass: ".erroreaHiria" },
            { id: "empresa", errorClass: ".erroreaEmpresa", soloSiEmpresa: true },
            { id: "nif", errorClass: ".erroreaNif", soloSiEmpresa: true }
        ];

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let errores = 0;
        const formulario = document.querySelector(".formulario");

        campos.forEach(campo => {
            if (campo.soloSiEmpresa && !checkbox.checked) {
                return; // saltamos este campo si no es empresa
            }

            const input = document.getElementById(campo.id);
            const valor = input.value.trim();
            const errorElemento = document.querySelector(campo.errorClass);

            if (valor === "") {
                errorElemento.style.display = "block";
                errores++;
            } else {
                if (campo.id === "email" && !emailRegex.test(valor)) {
                    errorElemento.style.display = "block";
                    errorElemento.innerText = "Introduce un correo válido";
                    errores++;
                } else {
                    errorElemento.style.display = "none";
                    if (campo.id === "email") {
                        errorElemento.innerText = "Este campo es obligatorio"; // restaurar mensaje por defecto
                    }
                }
            }
        });

        if (errores === 0) {
            localStorage.setItem("nombre", document.getElementById("name").value);
            localStorage.setItem("surname", document.getElementById("surname").value);
            localStorage.setItem("email", document.getElementById("email").value);
            localStorage.setItem("dirección", document.getElementById("dirección").value);
            localStorage.setItem("code", document.getElementById("code").value);
            localStorage.setItem("localidad", document.getElementById("localidad").value);
            localStorage.setItem("empresa", document.getElementById("empresa").value);
            localStorage.setItem("nif", document.getElementById("nif").value);
            if (window.location.pathname.includes("datosPersonales_eus.html")) {
                window.location.href = "pago_eus.html";
            } else if (window.location.pathname.includes("datosPersonales.html")) {
                window.location.href = "pago.html";
            }
        }

        formulario.style.minHeight = `${750 + errores * 30}px`;
    });

});
