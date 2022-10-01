import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.innerHTML = galleryItems
  .map((image) => {
    return `
        <a class = "gallery__item" href= "${image.original}">
            <img class = "gallery__image" 
                src = ${image.preview} 
                alt = "${image.description}">
         </a>`;
  }).join('');

gallery.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.className !== "gallery__image") {
        return;
    }
    let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
});
    