const galleryLinksRef = document.querySelectorAll('.gallery__link');
export default galleryLinksRef.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
  });
});
