const zoomElementLon = document.getElementById("planeLon");
let zoomLon = 1;
const ZOOM_SPEEDLON = 0.1;

document.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    zoomElementLon.style.transform = `scale(${(zoomLon += ZOOM_SPEEDLON)})`;
  } else {
    zoomElementLon.style.transform = `scale(${(zoomLon -= ZOOM_SPEEDLON)})`;
  }
});

export const ZoomLon = function () {zoomLon};