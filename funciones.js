const formulario = document.getElementById('miFormulario');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');


mensaje.addEventListener('input', () => {
    const cantidad = mensaje.value.length;
    contador.textContent = cantidad;

    if (cantidad > 500) {
        mensaje.value = mensaje.value.substring(0, 500);
    }
});


