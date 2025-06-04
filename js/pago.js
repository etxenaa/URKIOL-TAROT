document.addEventListener("DOMContentLoaded", async function () {

    const stripe = Stripe("pk_test_51RMpbVCt4ttH6UCJVVtDRx1xPH5ynaZ4FfQREOdu4zHUGpXRhat8XGZaN4rUtl4CP1YOkwzpis8x67OyGjDWPcaO00ngC90Wvz  ");
    const elements = stripe.elements();
    const card = elements.create("card", {
        style: {
            base: {
                fontSize: "16px",
                color: "white",
                "::placeholder": { color: "#aab7c4" }
            },
            invalid: { color: "#fa755a", iconColor: "#fa755a" }
        }
    });
    card.mount("#card-element");


    let cesta = JSON.parse(localStorage.getItem("cesta")) || [];
    let subtotalPrecio = document.getElementById("precioSub");
    let totalPrecio = document.getElementById("precioTot");
    let cantidad = 0;

    let subtotal = 0;
    cesta.forEach(producto => {
        cantidad = producto.cantidad;
        subtotal += producto.precio * producto.cantidad;
    });

    const envio = 5;
    const total = subtotal + envio;

    subtotalPrecio.innerHTML = `${subtotal}€`;
    totalPrecio.innerHTML = `${total}€`;

    const formulario = document.getElementById("payment-form");

    formulario.addEventListener("submit", async function (e) {
        e.preventDefault();
        const respuesta = await fetch("/crear-intento.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ total: total })
        });

        const data = await respuesta.json();
        const clientSecret = data.clientSecret;

        document.getElementById("formsparkNombre").value = localStorage.getItem("nombre") || "";
        document.getElementById("formsparkApellido").value = localStorage.getItem("surname") || "";
        document.getElementById("formsparkEmail").value = localStorage.getItem("email") || "";
        document.getElementById("formsparkDireccion").value = localStorage.getItem("dirección") || "";
        document.getElementById("formsparkCode").value = localStorage.getItem("code") || "";
        document.getElementById("formsparkLocalidad").value = localStorage.getItem("localidad") || "";
        document.getElementById("formsparkNombreEmpresa").value = localStorage.getItem("empresa") || "";
        document.getElementById("formsparkNif").value = localStorage.getItem("nif") || "";
        document.getElementById("formsparkCantidad").value = cantidad;

        document.getElementById("formsparkTotal").value = total;

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: `${document.getElementById("formsparkNombre").value} ${document.getElementById("formsparkApellido").value}`,
                    email: document.getElementById("formsparkEmail").value
                }
            }
        });

        if (result.error) {
            // Mostrar errores al usuario
            alert("Error en el pago: " + result.error.message);
        } else {
            if (result.paymentIntent.status === "succeeded") {

                document.getElementById("formspark-form").submit();

                localStorage.removeItem("cesta");
            }
        }
    });

});
