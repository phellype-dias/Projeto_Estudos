let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let lengthItems = items.length - 1;
let active = 0;

let isTransitioning = false;
const transitionTime = 1000;

next.onclick = function(){
    if (isTransitioning) return;
    isTransitioning = true;
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
    unlockAfterTransition();
}
prev.onclick = function(){
    if (isTransitioning) return;
    isTransitioning = true;
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
    unlockAfterTransition();
}
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
}

function unlockAfterTransition() {
    setTimeout(() => {
        isTransitioning = false;
    }, transitionTime);
}

window.onresize = function(event) {
    reloadSlider();
};