import { galleryItems } from './gallery-items.js';
// Change code below this line

const paletteContainer = document.querySelector('.gallery');

function createPhotoCardMarkup (galleryItems) {
    return galleryItems.map(({ preview, original, description}) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
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

paletteContainer.addEventListener('click', openImageClick);

function openImageClick(e) {
    e.preventDefault();

    const modal = basicLightbox.create(
        `
        <img src="${e.target.dataset.source}" width="800", height="600"> `,
        {
            onShow: () => window.addEventListener('keydown', onPressKeyESC),
            onClose: () => window.removeEventListener('keydown', onPressKeyESC),
        }
    );
    modal.show();


function onPressKeyESC(e) {
    if (e.code === 'Escape') {
        modal.close();
    }
}
}
console.log(galleryItems);
