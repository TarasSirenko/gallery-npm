import { galleryContainerRef } from './create-markup-gealery';

const basicLightbox = require('basiclightbox');

let onEscapeClick;
const option = {
  onShow: instance => {
    onEscapeClick = event => {
      if (event.code === 'Escape') {
        instance.close();
      }
    };
    document.addEventListener('keydown', onEscapeClick);
  },

  onClose: instance => {
    document.removeEventListener('keydown', onEscapeClick);
  },
};

const onItemGalleryClick = event => {
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    option,
  );
  instance.show();
};

galleryContainerRef.addEventListener('click', onItemGalleryClick);
