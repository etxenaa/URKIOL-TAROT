document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
        <nav>
            <div class="nav-item1">
                <a href="index.html"> 
                    <h2 class="tituluaNav">URKIOL TAROT</h2>
                </a>
            </div>
            <div class="nav-frame">
                <div class="nav-item" id="nav0"><a href="#">Inicio</a></div>
                <div class="nav-item" id="nav1"><a href="#">Como funciona</a></div>
                <div class="nav-item" id="nav2"><a href="#">Preguntas frecuentes</a></div>
                <div class="nav-item" id="nav3"><a href="#">Testimonios</a></div>
                <div class="nav-item" id="nav4"><a href="#">Cesta</a></div>
                <div class="nav-item" id="nav5"><a href="#"></a></div>
                <div class="nav-item" id="nav6"><button><a href="#">Compra ahora</a></button></div>
            </div>
            <input type="checkbox" id="menu-toggle">
            <label for="menu-toggle" class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.917969 28.8008C0.709635 28.6185 0.572917 28.3971 0.507813 28.1367C0.442708 27.8763 0.442708 27.6159 0.507813 27.3555C0.585938 27.0951 0.722656 26.8737 0.917969 26.6914L12.8906 14.6992L0.917969 2.70703C0.722656 2.52474 0.592448 2.30339 0.527344 2.04297C0.46224 1.78255 0.46224 1.52865 0.527344 1.28125C0.592448 1.02083 0.722656 0.792969 0.917969 0.597656C1.10026 0.402344 1.32161 0.278646 1.58203 0.226563C1.84245 0.161458 2.09635 0.161458 2.34375 0.226563C2.59115 0.291667 2.81901 0.415365 3.02734 0.597656L15 12.5898L26.9922 0.597656C27.2786 0.311198 27.6302 0.167969 28.0469 0.167969C28.4635 0.167969 28.8151 0.311198 29.1016 0.597656C29.401 0.884115 29.5443 1.24219 29.5313 1.67188C29.5313 2.08854 29.388 2.43359 29.1016 2.70703L17.1094 14.6992L29.1016 26.6914C29.388 26.9648 29.5313 27.3099 29.5313 27.7266C29.5313 28.1432 29.388 28.5013 29.1016 28.8008C28.8151 29.1003 28.4635 29.2435 28.0469 29.2305C27.6302 29.2305 27.2786 29.0872 26.9922 28.8008L15 16.8086L3.02734 28.8008C2.81901 28.9961 2.59115 29.1198 2.34375 29.1719C2.09635 29.237 1.84245 29.237 1.58203 29.1719C1.32161 29.1198 1.10026 28.9961 0.917969 28.8008Z" fill="#03063E"/>
                </svg>
            </label>
        </nav>
    `;

    document.body.insertAdjacentHTML("afterbegin", navbar);

    const nav = document.querySelector('nav');
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('show');
        document.body.classList.add('no-scroll');

    });

    document.querySelectorAll('.nav-frame a').forEach(link => {
        link.addEventListener('click', function () {
            nav.classList.remove('show');
            document.body.classList.remove('no-scroll');
        });
    });

    document.querySelector('.nav-item1').addEventListener('click', function () {
        if (window.location.pathname.endsWith("index_eus.html") || window.location.pathname.includes("cesta_eus.html") || window.location.pathname.includes("datosPersonales_eus.html") || window.location.pathname.includes("pago_eus.html")) {
            window.location.href = "index_eus.html";
        } else if (window.location.pathname === "/" || window.location.pathname.includes("index.html") || window.location.pathname.includes("cesta.html") || window.location.pathname.includes("datosPersonales.html") || window.location.pathname.includes("pago.html")) {
            window.location.href = "index.html";
        }
    });


    if (window.location.pathname.endsWith("index_eus.html") || window.location.pathname.includes("cesta_eus.html") || window.location.pathname.includes("datosPersonales_eus.html") || window.location.pathname.includes("pago_eus.html") || window.location.pathname.includes("compra_eus.html")) {
        document.querySelector('#nav0>a').href = "index_eus.html";
        document.querySelector('#nav1>a').text = "Nola erabilzen da";
        document.querySelector('#nav1>a').href = "index_eus.html#comoFunciona";
        document.querySelector('#nav2>a').text = "Ohiko galderak / zalantzak";  
        document.querySelector('#nav2>a').href = "index_eus.html#preguntas";
        document.querySelector('#nav3>a').text = "Testigantzak";
        document.querySelector('#nav3>a').href = "index_eus.html#testimonios";
        document.querySelector('#nav4>a').text = "Saskia";
        document.querySelector('#nav4>a').href = "cesta_eus.html";
        document.querySelector('#nav5>a').text = "Cast";
        document.querySelector('#nav5>a').href = "index.html";
        document.querySelector('#nav6>button>a').text = "Erosi orain";
        document.querySelector('#nav6>button>a').href = "../compra_eus.html";
    } else if (window.location.pathname === "/" || window.location.pathname.includes("index.html") || window.location.pathname.includes("datosPersonales.html") || window.location.pathname.includes("pago.html") || window.location.pathname.includes("cesta.html") || window.location.pathname.includes("compra.html")) {
        document.querySelector('#nav0>a').href = "index.html";
        document.querySelector('#nav1>a').text = "Como funciona";
        document.querySelector('#nav1>a').href = "index.html#comoFunciona";
        document.querySelector('#nav2>a').text = "Preguntas frecuentes";
        document.querySelector('#nav2>a').href = "index.html#preguntas";
        document.querySelector('#nav3>a').text = "Testimonios";
        document.querySelector('#nav3>a').href = "index.html#testimonios";
        document.querySelector('#nav4>a').text = "Cesta";
        document.querySelector('#nav4>a').href = "cesta.html";
        document.querySelector('#nav5>a').text = "Eus";
        document.querySelector('#nav5>a').href = "index_eus.html";
        document.querySelector('#nav6>button>a').text = "Compra ahora";
        document.querySelector('#nav6>button>a').href = "../compra.html";
    }
});
