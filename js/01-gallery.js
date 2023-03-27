import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const paletteContainer = document.querySelector('.gallery');
console.log(paletteContainer);
const cardsMarkup = createCards(galleryItems);
console.log(cardsMarkup);

paletteContainer.insertAdjacentHTML('afterbegin', cardsMarkup);
paletteContainer.addEventListener('click', onClick);

// function onContainerClick(evt) {
//   console.log(evt.target);
// }

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

function onClick(evnt) {
  console.log(evt.target);
  evnt.preventDefault();
  if (evnt.target.nodeName !== 'IMG') return;

  const thisImg = evnt.target.classList.contains('.gallery__image');
  if (!thisImg) return;

  const currentImgUrl = e.target.dataset.source;
}

// const instance = basicLightbox.create(
//   `
// 		<img src="${original}" width="1280" height="auto"/>
//         `
//   {
//     onShow: instance => {
//       window.addEventListener('keydown', onEscPress);
//     },
//     onClose: instance => {
//       window.removeEventListener('keydown', onEscPress);
//     },
//   }
// );

// instance.show();

// function onEscPress(evnt) {
//   const ESC_KEY = 'Escape';
//   const isEscKey = evnt.code === ESC_KEY;
//   if (!isEscKey) return;
//   instance.close();
// }
// }

// }
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

document.querySelector('.gallery__image').onclick = () => {
  paletteContainer
    .create(
      `
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`
    )
    .show();
};
