import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const paletteContainer = document.querySelector('.gallery');
console.log(paletteContainer);
const cardsMarkup = createCards(galleryItems);
console.log(cardsMarkup);

paletteContainer.insertAdjacentHTML('afterbegin', cardsMarkup);

// function onContainerClick(evt) {
//   console.log(evt.target);
// }

function createCards(el) {
  return el
    .map(({ preview, original, description }) => {
      return `<li  class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                loading="lazy"
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

const imgClick = evt => {
  evt.preventDefault();

  if (!e.target.nodeName !== 'IMG') return;

  const imSelect = e.target.getAttribute('data-source');

  const instance = basicLightbox.create(
    `
<img width="1280" height="auto" src="${imSelect}">`
  );
  instance.show();
};

paletteContainer.addEventListener('click', imgClick);

// const instance = basicLightbox.create(
//   `
// <img width="1280" height="auto" src="">`,
//   {
//     onShow: instance => {
//       window.addEventListener('keydown', escPress);
//     },
//   }
// );

// function escPress(el) {
//   if (el.code !== 'Escape') return;
//   instance.close();
// }

// function imgClick(evt) {
//   evt.preventDefault();
//   const dataset = evt.target.dataset.source;
//   if (!dataset) return;
//   instance.element().querySelector('img').src = dataset;
//   instance.show();
// }

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

// if (el.code !== 'Escape') return;

// function onClick(evnt) {
//   console.log(evt.target);
//   evnt.preventDefault();
//   if (evnt.target.nodeName !== 'IMG') return;

//   const thisImg = evnt.target.classList.contains('.gallery__image');
//   if (!thisImg) return;

//   const currentImgUrl = e.target.dataset.source;
// }

// // const instance = basicLightbox.create(
// //   `
// // 		<img src="${original}" width="1280" height="auto"/>
// //         `
// //   {
// //     onShow: instance => {
// //       window.addEventListener('keydown', onEscPress);
// //     },
// //     onClose: instance => {
// //       window.removeEventListener('keydown', onEscPress);
// //     },
// //   }
// // );

// // instance.show();

// // }
// // ++++++++++++++++++++++++++++++++++++++++=

// //   const nextActiveBtn = evnt.target;
// //     nextActiveBtn.target.classlist.add('gallery__link');
// //     // selectTag = nextActiveBtn.dataset.value;

// // }

// document.querySelector('.gallery__image').onclick = () => {
//   paletteContainer
//     .create(
//       `
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`
//     )
//     .show();
// };

// import { galleryItems } from './gallery-items.js';

// ...............cardsMarkup....................
// rendered items
// function createGalleryItemsMarkup(items) {
//   return items
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//     })
//     .join('');
// }
