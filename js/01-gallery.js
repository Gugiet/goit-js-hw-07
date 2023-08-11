import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const createGallery = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
      </div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", createGallery);

gallery.addEventListener("click", selectItem);

function selectItem(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectedImg = `<img src="${event.target.dataset.source}">`;

  const instance = basicLightbox.create(selectedImg);
  instance.show();

  document.body.addEventListener("keydown", (e) => {
    if (e.key === "Escape") instance.close();
  });
}
