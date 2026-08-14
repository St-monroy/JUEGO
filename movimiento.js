document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const track = document.querySelector('.slider-track');
    const slides = Array.from(track.children);

    let currentIndex = 0;

    function updateSlider() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Regresa al primer slide
        }
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Salta al último slide
        }
        updateSlider();
    });

    // Ajusta la posición automáticamente si se cambia el tamaño de la pantalla
    window.addEventListener('resize', updateSlider);
});



function abrirChat() {
    document.getElementById("chat").style.display = "block";
}

function cerrarChat() {
    document.getElementById("chat").style.display = "none";
}

async function enviarMensaje() {

    console.log("enviarMensaje ejecutado");

    const input = document.getElementById("mensaje");
    const mensajes = document.getElementById("mensajes");

    const texto = input.value.trim();

    if (texto === "") return;

    mensajes.innerHTML += `<p><strong>Tú:</strong> ${texto}</p>`;

    input.value = "";

    try {

        const respuesta = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                mensaje: texto
            })
        });

        const datos = await respuesta.json();

        mensajes.innerHTML += `<p><strong>IA:</strong> ${datos.respuesta}</p>`;

        mensajes.scrollTop = mensajes.scrollHeight;

    } catch (error) {

        mensajes.innerHTML += `<p><strong>Error:</strong> No se pudo conectar con el servidor.</p>`;

    }

}



function mostrarProximamente() {
    document.getElementById("proximamente").style.display = "flex";
}

function cerrarProximamente() {
    document.getElementById("proximamente").style.display = "none";
}