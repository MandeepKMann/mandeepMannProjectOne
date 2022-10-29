// const galleryImg = document.querySelectorAll('.gallery img');
// const modal = document.querySelector('.modal');
// const popUpImg = document.querySelector('.popUpImg');
// console.log(popUpImg)


// galleryImg.forEach(image =>{
//     image.onclick = () =>{
//         modal.style.display = 'block';
//         popUpImg.src = image.getAttribute('src');
//     }
// });

// const closeModal = document.querySelectorAll('.modal i');

// closeModal.forEach(button =>{
//     button.onclick = () =>{
//         modal.style.display = 'none';
//     }
// })

// create div and variable and give it an id
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'

// append it to the bodyyyyy
document.body.appendChild(lightbox)

// select gallery imgs
const galleryImages = document.querySelectorAll('.gallery img')

// put on event listener on each gallery img
galleryImages.forEach(galleryImages => {
    galleryImages.addEventListener('click', e => {
        // when clicked, add active class which shows lightbox
        lightbox.classList.add('active')
        // create img element
        const img = document.createElement('img')
        // make the src for newly created image same as the one clicked
        img.src = galleryImages.src
        // makes it so while one image is clicked, you can't click another and have them both show up (removes img before opening another img)
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        // append newly created img to lightbox as child
        lightbox.appendChild(img)
    })
})

// put event listener on lightbox
lightbox.addEventListener('click', e => {
    // if click on image, do nothing, if click on lightbox, close
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})





