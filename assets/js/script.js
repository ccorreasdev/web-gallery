const imagesLayout = 7;
let imagesNumber;
let forCounter;
const layout = document.querySelector("#layout");
let photosData = [];


const loadJSON = async () => {
    try {
        const response = await fetch('./assets/img/gallery/photos.json');
        photosData = await response.json();
        console.log(photosData);
        imagesNumber = photosData.length - 1;
        forCounter = imagesNumber / imagesLayout;
        showImages();
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
    }
}

const showImages = async () => {

    let template = "";

    for (let i = 0; i <= forCounter; i++) {

        let grid1 = 0, grid2 = 0, grid3 = 0, grid4 = 0, grid5 = 0, grid6 = 0, grid7 = 0;

        if ((i * 7 + 1) <= imagesNumber) {
            grid1 = i * 7 + 1;
        } else {
            grid1 = 0;
        }

        if ((i * 7 + 2) <= imagesNumber) {
            grid2 = i * 7 + 2;
        } else {
            grid2 = 0;
        }

        if ((i * 7 + 3) <= imagesNumber) {
            grid3 = i * 7 + 3;
        } else {
            grid3 = 0;
        }

        if ((i * 7 + 4) <= imagesNumber) {
            grid4 = i * 7 + 4;
        } else {
            grid4 = 0;
        }

        if ((i * 7 + 5) <= imagesNumber) {
            grid5 = i * 7 + 5;
        } else {
            grid5 = 0;
        }

        if ((i * 7 + 6) <= imagesNumber) {
            grid6 = i * 7 + 6;
        } else {
            grid6 = 0;
        }

        if ((i * 7 + 7) <= imagesNumber) {
            grid7 = i * 7 + 7;
        } else {
            grid7 = 0;
        }



        template += `
    <section class="gallery__layout">
        <div class="gallery1">
            <div class="photo__title1">${photosData[grid1].ciudad}</div>
            <img class="gallery__photo" src="./assets/img/gallery/${photosData[grid1].id}.png" alt="photo">
        </div>

        <div class="gallery2">
        <div class="photo__title2">${photosData[grid2].ciudad}</div>
        <img class="gallery__photo" src="./assets/img/gallery/${photosData[grid2].id}.png" alt="photo">
        </div>

        <div class="gallery3">
        <div class="photo__title3">${photosData[grid3].ciudad}</div>
        <img class="gallery__photo" src="./assets/img/gallery/${photosData[grid3].id}.png" alt="photo">
        </div>

        <div class="gallery4">
        <div class="photo__title4">${photosData[grid4].ciudad}</div>
        <img class="gallery__photo" src="./assets/img/gallery/${photosData[grid4].id}.png" alt="photo">
        </div>

        <div class="gallery5">
        <div class="photo__title5">${photosData[grid5].ciudad}</div>
        <img class="gallery__photo" src="./assets/img/gallery/${photosData[grid5].id}.png" alt="photo">
        </div>

        <div class="gallery6">
        <div class="photo__title6">${photosData[grid6].ciudad}</div>
        <img class="gallery__photo" src="./assets/img/gallery/${photosData[grid6].id}.png" alt="photo">
        </div>

        <div class="gallery7">
        <div class="photo__title7">${photosData[grid7].ciudad}</div>
        <img class="gallery__photo" src="./assets/img/gallery/${photosData[grid7].id}.png" alt="photo">
        </div>
    </section>
    `;
    }




    layout.innerHTML += template;
};

loadJSON();