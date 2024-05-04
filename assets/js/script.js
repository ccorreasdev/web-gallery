const imagesNumber = 10;
const imagesLayout = 7;
const forCounter = imagesNumber / imagesLayout;
const layout = document.querySelector("#layout");

const showImages = () => {



    let template = "";

    for (let i = 0; i <= forCounter; i++) {

        let grid1, grid2, grid3, grid4, grid5, grid6, grid7;

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
            <img class="gallery__photo" src="./assets/img/gallery/${grid1}.png" alt="photo">
        </div>

        <div class="gallery2">
            <img class="gallery__photo" src="./assets/img/gallery/${grid2}.png" alt="photo">
        </div>

        <div class="gallery3">
            <img class="gallery__photo" src="./assets/img/gallery/${grid3}.png" alt="photo">
        </div>

        <div class="gallery4">
            <img class="gallery__photo" src="./assets/img/gallery/${grid4}.png" alt="photo">
        </div>

        <div class="gallery5">
            <img class="gallery__photo" src="./assets/img/gallery/${grid5}.png" alt="photo">
        </div>

        <div class="gallery6">
            <img class="gallery__photo" src="./assets/img/gallery/${grid6}.png" alt="photo">
        </div>

        <div class="gallery7">
            <img class="gallery__photo" src="./assets/img/gallery/${grid7}.png" alt="photo">
        </div>
    </section>
    `;

        console.log(i)
            ;
    }




    layout.innerHTML += template;
};

showImages();