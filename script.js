
const imageContainer = document.querySelector('.parallax-item', '.gif');
const slidingImage = document.querySelector('.parallax-item', '.gif');

imageContainer.addEventListener('mousemove', (e) => {
    const rect = imageContainer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left; // X coordinate within the element
    const mouseY = e.clientY - rect.top;  // Y coordinate within the element

    const moveX = ((mouseX / rect.width) - 0.5) * 20; // Adjust the 20 value for more/less movement
    const moveY = ((mouseY / rect.height) - 0.5) * 20;

    slidingImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

imageContainer.addEventListener('mouseleave', () => {
    slidingImage.style.transform = 'translate(2, 2)';
});

window.onload = function() {
    const hoveringImage = document.getElementById('hovering-image');
    let x = 0;
    let y = 0;
    let deltaX = 1; // Movement speed in X direction
    let deltaY = 1; // Movement speed in Y direction
    const maxX = window.innerWidth - hoveringImage.offsetWidth; // Max X boundary
    const maxY = window.innerHeight - hoveringImage.offsetHeight; // Max Y boundary

    function moveImage() {
        // Update X and Y coordinates
        x += deltaX;
        y += deltaY;

        // Check boundaries and reverse direction if needed
        if (x >= maxX || x <= 0) {
            deltaX = -deltaX; // Reverse X direction
        }
        if (y >= maxY || y <= 0) {
            deltaY = -deltaY; // Reverse Y direction
        }

        // Apply the new position to the image
        hoveringImage.style.left = `${x}px`;
        hoveringImage.style.top = `${y}px`;

        // Call the function again to create an animation loop
        requestAnimationFrame(moveImage);
    }

    // Start the movement
    requestAnimationFrame(moveImage);
};
