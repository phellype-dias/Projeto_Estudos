let minValue = document.getElementById("min-value");
let maxValue = document.getElementById("max-value");

const rangeFill = document.querySelector(".range-fill");

function validateRange() {
    let minPrice = parseInt(inputElements[0].value);
    let maxPrice = parseInt(inputElements[1].value);

    if (minPrice > maxPrice){
        let tempValue = maxPrice;
        maxPrice = minPrice;
        minPrice = tempValue;
    }

    const rangeMin = parseInt(inputElements[0].min);
    const rangeMax = parseInt(inputElements[0].max);

    const minPercentage = ((minPrice - rangeMin) / (rangeMax - rangeMin)) * 100;
    const maxPercentage = ((maxPrice - rangeMin) / (rangeMax - rangeMin)) * 100;

    rangeFill.style.left = minPercentage + "%";
    rangeFill.style.width = maxPercentage - minPercentage + "%";

    const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 0,
    });

    minValue.innerHTML = formatter.format(minPrice);
    maxValue.innerHTML = formatter.format(maxPrice);
}

const inputElements = document.querySelectorAll("input[type='range']");

inputElements.forEach((element) => {
    element.addEventListener("input", validateRange);
});

validateRange();
