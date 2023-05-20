// Check if the device is a mobile device
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }
  
  // Apply styles based on device type
  if (isMobileDevice()) {
    // Mobile styles
    document.getElementById("mobile").style.display = "block";
    document.getElementById("pc").style.display = "none";
  } else {
    // PC styles
    document.getElementById("mobile").style.display = "none";
    document.getElementById("pc").style.display = "block";
  }  