import { galleryItems } from '../comon-js/gallery-items.js';

export { galleryContainerRef };
const galleryContainerRef = document.querySelector('.gallery');

const createGalleryMarkup = arrPicturesRefs => {
  return arrPicturesRefs
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
};
const galleryItemMarkup = createGalleryMarkup(galleryItems);
galleryContainerRef.innerHTML = galleryItemMarkup;
