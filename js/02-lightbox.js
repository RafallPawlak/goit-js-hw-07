import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

for (const image of galleryItems) {
    const images =
    `<a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>`;
    gallery.innerHTML += images;
};

gallery.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.className !== "gallery__image") {
        console.log(event.target.className);
        return;
    }
    let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
});
    