document.addEventListener('DOMContentLoaded', () => {
    const colorCursor = document.getElementById('pointer');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    const delay =0.05; // Adjust this value to change the speed of the trailing effect

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function animate() {
        cursorX += (mouseX - cursorX) * delay;
        cursorY += (mouseY - cursorY) * delay;

        colorCursor.style.left = `${cursorX}px`;
        colorCursor.style.top = `${cursorY}px`;

        requestAnimationFrame(animate);
    }

    // Function to change the background color on hover
    // function changeColorOnHover(event) {
    //     if (event.type === 'mouseover') {
    //         const hoverColor = event.target.getAttribute('data-hover-color');
    //         colorCursor.style.backgroundColor = yellow;
    //     } else {
    //         colorCursor.style.backgroundColor = 'grey';
    //     }
    // }

    // Add hover event listeners to all elements with class 'hover-text'
    // const hoverElements = document.querySelectorAll('#main');
    // hoverElements.forEach(element => {
    //     element.addEventListener('mouseover', changeColorOnHover);
    //     element.addEventListener('mouseout', changeColorOnHover);
    // });

    animate();
});

