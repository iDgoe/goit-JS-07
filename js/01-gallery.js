import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const paletteContainer = document.querySelector('.gallery');
console.log(paletteContainer);
const cardsMarkup = createCards(galleryItems);
console.log(cardsMarkup);

paletteContainer.insertAdjacentHTML('afterbegin', cardsMarkup);

paletteContainer.addEventListener('click')

function onContainerClick(evt) {
    console.log(evt.target)
}

function createCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li  class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`;
    })
    .join('');
}

// ++++++++++++++++++++++++++++++++++++++++=

// const x1 = document.querySelector('.');
// let selectTag = null;

// x1.addEventListener('click', onClick);

// function onClick(evnt) {
//   if (evnt.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   console.log(evnt.target);

//   const findActiveEl = document.querySelector('.gallery__link');

//   console.log(findActiveEl);

//   if (findActiveEl) {
//     findActiveEl.classList.remove('gallery__link');
//   }

//   const nextActiveBtn = evnt.target;
//     nextActiveBtn.target.classlist.add('gallery__link');
//     // selectTag = nextActiveBtn.dataset.value;

// }
