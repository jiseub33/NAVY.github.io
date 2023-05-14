function toggleFullScreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const sourceElem = document.getElementsByClassName("test_gunship")[0];
    const targetElem = document.getElementsByClassName("target")[0];
    targetElem.innerHTML = sourceElem.innerHTML;
  });