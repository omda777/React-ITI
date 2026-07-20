var i = 1;
function Slider() {
    i++;
    document.images[0].src = "images/" + i + ".jpg";
    if (i >= 8) {
        i = 0;
    }
}
function startSlider() {
    //create inteval condition
    SliderIn = setInterval(Slider, 1000);
}
function stopSlider() {
    clearInterval(SliderIn);
}
function nextSlider() {
    i++;
    if (i > 8) {
        i = 1;
    }
    document.images[0].src = "images/" + i + ".jpg";
}
function prevSlider() {
    i--;
    if (i < 1) {
        i = 8;
    }
    document.images[0].src = "images/" + i + ".jpg";
}
