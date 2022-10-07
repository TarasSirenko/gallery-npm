import { galleryItems } from '../comon-js/gallery-items.js';
const galleryContainerRef = document.querySelector('.gallery');

const createGalleryMarkup = arrPicturesRefs => {
  return arrPicturesRefs
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
};
const galleryItemMarkup = createGalleryMarkup(galleryItems);
galleryContainerRef.innerHTML = galleryItemMarkup;
