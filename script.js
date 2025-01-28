document.addEventListener('DOMContentLoaded', () => {
    const collageContainer = document.querySelector('.collage-container');
    const images = Array.from(collageContainer.children);
    
    // Duplicate images to create a seamless loop
    images.forEach(image => {
        const clone = image.cloneNode(true);
        collageContainer.appendChild(clone);
    });

    let offset = 0; // Initial position
    const speed = 0.7; // Scrolling speed (pixels per frame)

    function scroll() {
        offset -= speed; // Move left
        collageContainer.style.transform = `translateX(${offset}px)`;

        // Reset to start of original images when the first set has scrolled out
        const totalWidth = images.length * (images[0].offsetWidth + 20); // Image width + gap
        if (offset <= -totalWidth) {
            offset = 0; // Snap back to start (seamlessly, thanks to duplication)
        }

        requestAnimationFrame(scroll); // Loop the animation
    }

    scroll(); // Start scrolling
});
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")

}