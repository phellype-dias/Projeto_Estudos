const buttons = document.querySelectorAll('.banner button');
const imageContainer = document.querySelector('.image-container');
const imageWidth = Math.round((parseFloat(window.getComputedStyle(imageContainer.querySelector('.banner-image')).width) * 100 ) / 100) + 0.4;
const imagecount = imageContainer.querySelectorAll('.banner-image').length
const imageContainerWidth = parseFloat(imageWidth * imagecount);
let contador = 0;

let isTransitioning = false;

buttons.forEach(btn => btn.addEventListener("click", () => {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const isNext = btn.id === "next";
    
    if (isNext) {
        contador++;
        if (contador > imagecount - 3) {
            contador = 0;
        }
    } else {
        contador--;
        if (contador < 0) { 
            contador = imagecount - 3;
        }
    }

    const newScrollLeft = contadorTela(contador,imageWidth)

    imageContainer.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
    });

    setTimeout(() => isTransitioning = false, 900);
}));

function contadorTela(contador, imageWidth) {
    console.log("Largura de image da função: ",imageWidth);
    console.log("contador da função: ", contador)

    return contador * imageWidth;
}
