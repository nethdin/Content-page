window.onload = function() {
    var icons = document.querySelectorAll('.icon');
    var scale = 1;

    function animateIcons() {
    scale = scale === 1 ? 1.5 : 1; // Toggles between 1 and 1.5 scale
    icons.forEach(function(icon) {
    icon.style.transform = 'scale(' + scale + ')';
   });
}

    setInterval(animateIcons, 1000); // Change the interval as needed
};