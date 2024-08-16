function currentImage(n) {
    var i;
    var images = document.getElementsByClassName("imageClass");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    images[n - 1].style.display = "block";
    dots[n - 1].className += " active";
}
currentImage(1);