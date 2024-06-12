document.addEventListener("DOMContentLoaded", function() {
    const space = document.getElementById("space");

    function createStar() {
        const star = document.createElement("div");
        star.className = "star";
        
        // Random position
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        
        // Random size
        const size = Math.random() * 6 + 3;  // Aumenta el tamaño de las estrellas
        star.style.width = size + "px";
        star.style.height = size + "px";
        
        // Append star to space
        space.appendChild(star);

        // Remove star after animation
        setTimeout(() => {
            star.remove();
        }, 2000);
    }

    // Create stars at random intervals
    setInterval(createStar, 20);  // Incrementa la frecuencia de aparición de estrellas
});

document.addEventListener("DOMContentLoaded", () => {
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach((flower, index) => {
        flower.style.animation = `grow 2s ease ${index * 0.5}s forwards`;
    });
});

