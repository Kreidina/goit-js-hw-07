import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryItemsMarcup = createGalleryItems(galleryItems);

function createGalleryItems(items){
    return items.map(({ preview, original, description}) => {
        return (
        `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div> `);
    })
    .join('');
}
galleryRef.innerHTML = galleryItemsMarcup;


galleryRef.addEventListener('click', onClick);

let instance = null;

function onClick(evt){
    evt.preventDefault();
    if(evt.target.nodeName !== 'IMG'){
        return;
    }
    instance = basicLightbox.create(`
    <img src=${evt.target.dataset.source}>
`);

instance.show();
document.addEventListener('keydown', onKeyDouwn);


function onKeyDouwn(evt) {
  if(evt.code === 'Escape' && instance !== 'null'){
    instance.close();
    document.removeEventListener('keydown', onKeyDouwn);
  }
}
}
