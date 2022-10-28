const galleryImg = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const popUpImg = document.querySelector('.popUpImg').src;
console.log(popUpImg)


galleryImg.forEach(image =>{
    image.onclick = () =>{
        modal.style.display = 'block';
        popUpImg.src = image.getAttribute('src');
    }
});

const closeModal = document.querySelectorAll('.modal i');

closeModal.forEach(button =>{
    button.onclick = () =>{
        modal.style.display = 'none';
    }
})

console.log(closeModal);




