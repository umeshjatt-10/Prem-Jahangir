function openFullscreen() {
    const img = document.getElementById("photo");
    if (img.requestFullscreen) {
        img.requestFullscreen();
    } else if (img.webkitRequestFullscreen) { // Safari
        img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) { // IE11
        img.msRequestFullscreen();
    }
}

// Zoom functionality
let scale = 1;
const img = document.getElementById("photo");

img.addEventListener('wheel', (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
        scale *= 1.1; // Zoom in
    } else {
        scale /= 1.1; // Zoom out
    }
    img.style.transform = `scale(${scale})`;
});
