import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

for (const image of galleryItems) {
    const images =
    `<div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
          <img class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
         />
        </a>
    </div>`;
    gallery.innerHTML += images;
};

gallery.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.className !== "gallery__image") {
        return;
    };
    const srcLink = event.target.getAttribute("data-source");
    const instance = basicLightbox.create(
        `<img src="${srcLink}" width="800" height="600">`
    );
    instance.show();

    window.addEventListener("keydown", (press) => {
        if (press.key === "Escape") {
            instance.close();
        };
    });
});

