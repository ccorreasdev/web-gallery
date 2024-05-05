const imagesLayout = 7;
let imagesNumber;
let forCounter;
const layout = document.querySelector("#layout");
const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');
const fileDetails = document.getElementById('fileDetails');
const imagePreview = document.getElementById('imagePreview');
let photosData = [];
// Manejar el evento de cambio en el input de tipo file
fileInput.addEventListener('change', handleFileSelect);

// Función para manejar el archivo seleccionado
function handleFileSelect(event) {
    const file = event.target.files[0]; // Obtener el archivo seleccionado

    // Verificar si el archivo seleccionado es una imagen
    if (file && file.type.startsWith('image/')) {
        // Crear un objeto FileReader
        const reader = new FileReader();

        // Definir la función de retorno de llamada cuando la lectura del archivo esté completa
        reader.onload = function (e) {
            // Crear una etiqueta de imagen y establecer su atributo src con los datos del archivo leído
            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add("gallery__photo");

            // Limpiar el contenedor de vista previa de imagen y agregar la imagen cargada
            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);
        };

        // Leer el archivo como una URL de datos (data URL)
        reader.readAsDataURL(file);
    } else {
        // Si el archivo seleccionado no es una imagen, mostrar un mensaje de error
        imagePreview.innerHTML = 'Por favor, selecciona un archivo de imagen válido.';
    }
}


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
    <section id="gallery-layout" class="gallery__layout">
        <div class="gallery1 gallery">
            <div class="photo__title1">${photosData[grid1].ciudad}</div>
            <img class="gallery__photo" src="./assets/img/gallery/${photosData[grid1].id}.png" alt="photo">
        </div>

        <div class="gallery2 gallery">
        <div class="photo__title2">${photosData[grid2].ciudad}</div>
        <img class="gallery__photo" src="./assets/img/gallery/${photosData[grid2].id}.png" alt="photo">
        </div>

        <div class="gallery3 gallery">
        <div class="photo__title3">${photosData[grid3].ciudad}</div>
        <img class="gallery__photo" src="./assets/img/gallery/${photosData[grid3].id}.png" alt="photo">
        </div>

        <div class="gallery4 gallery">
        <div class="photo__title4">${photosData[grid4].ciudad}</div>
        <img class="gallery__photo" src="./assets/img/gallery/${photosData[grid4].id}.png" alt="photo">
        </div>

        <div class="gallery5 gallery">
        <div class="photo__title5">${photosData[grid5].ciudad}</div>
        <img class="gallery__photo" src="./assets/img/gallery/${photosData[grid5].id}.png" alt="photo">
        </div>

        <div class="gallery6 gallery">
        <div class="photo__title6">${photosData[grid6].ciudad}</div>
        <img class="gallery__photo" src="./assets/img/gallery/${photosData[grid6].id}.png" alt="photo">
        </div>

        <div class="gallery7 gallery">
        <div class="photo__title7">${photosData[grid7].ciudad}</div>
        <img class="gallery__photo" src="./assets/img/gallery/${photosData[grid7].id}.png" alt="photo">
        </div>
    </section>
    `;
    }



    const galleryLayout = document.querySelector("#gallery-items");
    galleryLayout.innerHTML += template;
    const viewClose = document.querySelector("#view-close");

    const viewPhoto = document.querySelector("#view-photo");
    const screenView = document.querySelector("#screen-view");

    galleryLayout.addEventListener("click", (e) => {
        const galleryPhoto = e.target.closest(".gallery__photo");
        if (galleryPhoto) {
            screenView.classList.add("screen__view--active");
            viewPhoto.src = galleryPhoto.src;
        }
    })

    viewClose.addEventListener("click", (e) => {
        console.log("aa")
        screenView.classList.remove("screen__view--active");
    });
};

loadJSON();



