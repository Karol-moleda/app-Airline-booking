const zoomElementPek = document.getElementById("planePek");
let zoomPek = 1;
const ZOOM_SPEEDPEK = 0.1;

document.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    zoomElementPek.style.transform = `scale(${(zoomPek += ZOOM_SPEEDPEK)})`;
  } else {
    zoomElementPek.style.transform = `scale(${(zoomPek -= ZOOM_SPEEDPEK)})`;
  }
});

export const ZoomPek = function () {zoomPek}

