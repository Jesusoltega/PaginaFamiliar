// Obtener todos los elementos de imagen de la galería
const images = document.querySelectorAll('.image-item img');

// Obtener el elemento modal
const modal = document.getElementById('imageModal');

// Obtener la imagen dentro del modal
const modalImage = document.getElementById('modalImage');

// Obtener el elemento de descripción (caption)
const captionText = document.getElementById('caption');

// Obtener el botón de cerrar
const closeButton = document.getElementsByClassName('close-button')[0];

// Recorrer cada imagen y añadir un evento de clic
images.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = "flex"; // Mostrar el modal
        modalImage.src = this.src; // Poner la URL de la imagen clicada en el modal
        captionText.innerHTML = this.dataset.description; // Poner la descripción del atributo data-description
    });
});

// Cuando el usuario hace clic en <span> (x), cerrar el modal
closeButton.addEventListener('click', function() {
    modal.style.display = "none";
});

// Cuando el usuario hace clic fuera de la imagen (en el fondo oscuro), cerrar el modal
modal.addEventListener('click', function(event) {
    // Si el clic fue directamente en el fondo del modal y no en la imagen o el caption
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Opcional: Cerrar el modal con la tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modal.style.display === "flex") {
        modal.style.display = "none";
    }
});