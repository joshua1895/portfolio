document.addEventListener('DOMContentLoaded', function () {
    const collageContainer = document.querySelector('.collage-container');
    const images = document.querySelectorAll('.collage-image');

    // Duplicate the images for the infinite scroll effect
    images.forEach(image => {
        const clone = image.cloneNode(true);
        collageContainer.appendChild(clone);  // Add clone to the container
    });
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