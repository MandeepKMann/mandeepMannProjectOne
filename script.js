// Lightbox JS

// This video saved me https://www.youtube.com/watch?v=uKVVSwXdLr0

// create div and variable and give it an id
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';

// append it to the bodyyyyy
document.body.appendChild(lightbox);

// select gallery imgs
const galleryImages = document.querySelectorAll('.gallery img');

// put on event listener on each gallery img
galleryImages.forEach(galleryImages => {
    galleryImages.addEventListener('click', e => {
        // when clicked, add active class which shows lightbox
        lightbox.classList.add('active');
        // create img element
        const img = document.createElement('img');
        // make the src for newly created image same as the one clicked
        img.src = galleryImages.src;
        // makes it so while one image is clicked, you can't click another and have them both show up (removes img before opening another img)
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        // append newly created img to lightbox as child
        lightbox.appendChild(img);
    });
});

// put event listener on lightbox
lightbox.addEventListener('click', e => {
    // if click on image, do nothing, if click on lightbox, close
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active');
});


// Scroll to the TOP!

// Create scroll button and give id and append to body
const scrollButton = document.createElement('button');
scrollButton.id = 'toTop'
document.body.appendChild(scrollButton);

// create icon and give font awesome classes and append as child to scroll button
const scrollButtonIcon = document.createElement('i');
scrollButtonIcon.className = ('fa-solid fa-chevron-up');
scrollButton.appendChild(scrollButtonIcon);

// scroll down to a certain point before the scroll to top button appears
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollButton.classList.add('active');
    };
});

// have scroll button listen for click then scroll to top, smooooooooothly
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});




