function toggleFullScreen() {
    var button = document.getElementById("fullscreenButton");
    if (document.fullscreenElement) {
      document.exitFullscreen();
      button.classList.remove("active");
    } else {
      document.documentElement.requestFullscreen();
      button.classList.add("active");
    }
  }
  