// const galleryImg = document.querySelectorAll('.gallery li')
// const modal = document.querySelector('.modal');
// const popUpImg = document.querySelector('.modalImg')
// console.log(galleryImg);
// console.log(modal);
// console.log(popUpImg);

// const popUp = function (event) {
//     event.target.style.display = "block";
// }

// galleryImg.addEventListener('click', popUp)

// const galleryImg = document.querySelectorAll('.gallery img');
// console.log(galleryImg);
// const modalImg = document.querySelector('.modalImg');
// const modalClose = document.querySelector('.modal i')
// const gallery = document.querySelector('.gallery')
// console.log(gallery)

// // galleryImg.forEach(galleryImg => {
// //     galleryImg.addEventListener('click', () => {
// //     });
// // });

// console.log(galleryImg[0])

// gallery.addEventListener('click'), (event) => {
    
//     if (event.target.class === ".imgOne") {
//         console.log("bonk1");
//     }
//     // if (event.class == ) {
//     //     console.log("bonk2");
//     // }
//     // if (galleryImg[3].clicked) {
//     //     console.log("bonk3");
//     // }
// };

const galleryImg = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const popUpImg = document.querySelectorAll('.popUpImg');


galleryImg.forEach(image =>{
    image.onclick = () =>{
        modal.style.display = 'block';
        popUpImg.src = image.getAttribute('src');
    }
});

const closeModal = document.querySelectorAll('.modal i');

closeModal.forEach(closeButton =>{
    closeButton.onclick = () =>{
        modal.style.display = 'none';
    }
})


console.log(closeModal);




