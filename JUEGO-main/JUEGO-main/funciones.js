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


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); 
    
    let todoCorrecto = true;

    if (nombre.value.trim() === "") {
        document.getElementById('errorNombre').style.display = 'block';
        nombre.style.borderColor = '#ff4a4a';
        todoCorrecto = false;
    } else {
        document.getElementById('errorNombre').style.display = 'none';
        nombre.style.borderColor = '#28a745';
    }

    if (correo.value.trim() === "") {
        document.getElementById('errorCorreo').style.display = 'block';
        correo.style.borderColor = '#ff4a4a';
        todoCorrecto = false;
    } else {
        document.getElementById('errorCorreo').style.display = 'none';
        correo.style.borderColor = '#28a745';
    }

    if (mensaje.value.trim().length < 10) {
        document.getElementById('errorMensaje').style.display = 'block';
        mensaje.style.borderColor = '#ff4a4a';
        todoCorrecto = false;
    } else {
        document.getElementById('errorMensaje').style.display = 'none';
        mensaje.style.borderColor = '#28a745';
    }


    if (todoCorrecto) {
        document.getElementById('alertaExito').style.display = 'block';
        formulario.reset(); 
        contador.textContent = "0"; 
    }
});