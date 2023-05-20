// Check if the device is a mobile device
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Apply styles based on device type
var deviceButton = document.getElementById("deviceButton");
if (isMobileDevice()) {
  // Mobile styles
  deviceButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    document.getElementById("mobile").style.display = "block";
    document.getElementById("pc").style.display = "none";
  });
} else {
  // PC styles
  deviceButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    document.getElementById("mobile").style.display = "none";
    document.getElementById("pc").style.display = "block";
  });
}