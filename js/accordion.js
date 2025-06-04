document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.addEventListener('click', function () {
            let targetId = item.getAttribute('data-target');

            let infoText = document.querySelector('p[id="' + targetId + '"]');
            let goraSVG = document.querySelector('svg[id="' + targetId + 'gora"]');
            let beheraSVG = document.querySelector('svg[id="' + targetId + 'behera"]');
            let contentElement = document.querySelector(".preguntas .content");

            let alturaActual = contentElement.offsetHeight;

            if (infoText.style.display === 'none' || infoText.style.display === ''){
                infoText.style.display = 'block';
                goraSVG.style.display = 'block';
                beheraSVG.style.display = 'none';
                item.style.paddingBottom = "100px";
                if (window.innerWidth < 593) {
                    contentElement.style.minHeight = (alturaActual + 200) + "px";
                } else {
                    contentElement.style.minHeight = (alturaActual + 100) + "px";
                }
            } else {
                infoText.style.display = 'none';
                goraSVG.style.display = 'none';
                beheraSVG.style.display = 'block';
                item.style.paddingBottom = "0px";
                contentElement.style.minHeight = (alturaActual - 100) + "px";
            }
        });
    });
});