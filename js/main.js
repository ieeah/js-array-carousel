/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const imagesRef = document.querySelector('.images');
const thumbsRef = document.querySelector('.thumbs');
//indice immagine carousel attiva
let activeImage = 0;

for (let i = 0; i < imageCollection.length; i++) {
    imagesRef.innerHTML += 
    `<div class="images-container">
        <img src="${imageCollection[i]}" alt="">
        <div class="text">
            <h3>${titleCollection[i]}</h3>
            <p>
                ${textCollection[i]}
            </p>
        </div>
    </div>
    `;

    //thumbs
    thumbsRef.innerHTML += 
    `<div class="thumb">
        <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
    </div>
    `;
}

// set active (image and thumbnail)
// console.log(document.getElementsByClassName('img-container'));
document.getElementsByClassName('images-container')[activeImage].classList.add('active');

document.getElementsByClassName('thumb')[activeImage].classList.add('active');

// immagine successiva
const next = document.querySelector('.next');

next.addEventListener('click', function () {

    // !!! è leggermente diverso da come fatto da Paolo, lui ha inserito "activeImage++" all'interno dell'else e non all'esterno come ho fatto io
    activeImage++;

    if (activeImage === imageCollection.length ) {
        activeImage = 0;
    } 

    // image
    document.querySelector('.images-container.active').classList.remove('active');
    document.getElementsByClassName('images-container')[activeImage].classList.add('active');

    //thumbs
    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activeImage].classList.add('active');

    console.log('activeImage', activeImage);
});



const prev = document.querySelector('.prev');

prev.addEventListener('click', function () {

        // !!! è leggermente diverso da come fatto da Paolo, lui ha inserito "activeImage--" all'interno dell'else e non all'esterno come ho fatto io
activeImage--;

if (activeImage < 0 ) {
    activeImage = imageCollection.length - 1;
}

    // // image
    // document.querySelector('.images-container.active').classList.remove('active');
    // document.getElementsByClassName('images-container')[activeImage].classList.add('active');

    // //thumbs
    // document.querySelector('.thumb.active').classList.remove('active');
    // document.getElementsByClassName('thumb')[activeImage].classList.add('active');

    console.log('activeImage', activeImage)
});

