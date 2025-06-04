document.addEventListener('DOMContentLoaded', function () {
    let cliente = document.querySelector('.reseñas>.container2>.container-text>.cliente>p:nth-child(1)');
    let cliente2 = document.querySelector('.reseñas>.container2>.container-text>.cliente>p:nth-child(2)');
    let reseña = document.querySelector('.reseñas>.container2>.container-text>p');
    let imagen = document.querySelector('.reseñas>.container2>.img');

    document.getElementById('derecha').addEventListener('click', function () {

        if (cliente.innerHTML.includes("Agurne")) {
            if (window.location.pathname.includes("index_eus.html")) {
                reseña.innerHTML = '"Oso inspiragarria den jokoa da! Intuizioa lantzeko tresna ederra da. Gaina intuizioa gaitasun garrantzitsua da Adimen artifizialaren aroan. "';
                cliente.innerHTML = "Stephan Kosinski";
                cliente2.innerHTML = "Adesio enpresaren sortzailea";
                imagen.style.backgroundImage = "url('img/cliente2.jpg')";
                imagen.style.backgroundPosition = "center";
            } else {
                reseña.innerHTML = '"¡Es un juego muy inspirador!  Es una herramienta que ayuda a potenciar la intuición y ésta es una habilidad muy necesaria. Aun más, en tiempos de la inteligencia artificial"';
                cliente.innerHTML = "Stephan Kosinski";
                cliente2.innerHTML = "Fundador de Adesio";
                imagen.style.backgroundImage = "url('img/cliente2.jpg')";
                imagen.style.backgroundPosition = "center";
            }
        };
    });
    document.getElementById('izquierda').addEventListener('click', function () {
        if (cliente.innerHTML.includes("Stephan")) {

            if (window.location.pathname.includes("index_eus.html")) {
                reseña.innerHTML = '"Joko hau oso ondo dago! Ilustrazioak ederrak dira. Nahiz bakarka edo lagunekin momentu on bat pasatzeko aukera bat da. Diseinua oso ondo dago eta produktuaren kalitatea ona da."';
                cliente.innerHTML = "Agurne Agiriano";
                cliente2.innerHTML = "Copreciko langilea";
                imagen.style.backgroundImage = "url('img/cliente1.png')";
                imagen.style.backgroundPosition = "left";
            } else {
                reseña.innerHTML = '"“¡Este juego está muy bien! Las ilustraciones son preciosas. Ya sea en soledad o con gente, siempre acaba siendo un momento muy divertido. El diseño es increíble y la calidad de las cartas es muy buena!”"';
                cliente.innerHTML = "Agurne Agiriano";
                cliente2.innerHTML = "Operaria en Copreci";
                imagen.style.backgroundImage = "url('img/cliente1.png')";
                imagen.style.backgroundPosition = "left";
            }
        }
    });

});
