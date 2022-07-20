import { galleryItems } from './gallery-items.js';
// Change code below this line



const paletteContainer = document.querySelector('.gallery');

function createPhotoCardMarkup (galleryItems) {
    return galleryItems.map(({ preview, original, description}) => {
        return `
        <div class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>
        `;
    }
    ).join('');
}

const cardsMarkup = createPhotoCardMarkup(galleryItems);
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: '250'
    
})


console.log(galleryItems);
