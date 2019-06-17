'use strict';
const imageGallery = document.querySelector('.image-gallery')
const fullview = imageGallery.querySelector('.fullview > img')
const preview =  imageGallery.querySelector('.preview')

const galleryItems = [
  { preview: '01-320px.jpg', fullview: '01-1280px.jpg', alt: "alt text 1" },
  { preview: '02-320px.jpg', fullview: '02-1280px.jpg', alt: "alt text 2" },
  { preview: '03-320px.jpg', fullview: '03-1280px.jpg', alt: "alt text 3" },
  { preview: '04-320px.jpg', fullview: '04-1280px.jpg', alt: "alt text 4" },
  { preview: '05-320px.jpg', fullview: '05-1280px.jpg', alt: "alt text 5" },
  { preview: '06-320px.jpg', fullview: '06-1280px.jpg', alt: "alt text 6" },
];
const PATH = 'https://bolshunova.github.io/go-it-fe-js/Hw-Js-08/img';
const insertImage = (img, s, a) => {
  img.src = s;
  img.alt = a;
}
const setPreview = arr => arr.map(e =>
    `<li>
        <img src="${PATH}/${e.preview}" data-fullview="${e.fullview}" alt="${e.alt}">
    </li>`
    ).join('')
;
const getAlt = (arr, prop, source) =>  arr.filter(e => e[prop] === source)[0].alt;

function setFullview ({target}) {
    if(target.nodeName !== 'IMG') return;
    const imgSrc = `${PATH}/${target.dataset.fullview}`;
    const imgAlt =  getAlt(galleryItems, 'fullview', target.dataset.fullview);
    insertImage(fullview, imgSrc, imgAlt)
}
preview.addEventListener('click', setFullview);

// initial
(function (arr, elem) {
    const imgSrc = `${PATH}/${arr[0].fullview}`;
    const imgAlt =  arr[0].alt;
    insertImage(elem, imgSrc, imgAlt)
    preview.innerHTML = setPreview(galleryItems)
})(galleryItems, fullview);

