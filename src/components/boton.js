
const btnSwitch = document.querySelector('#switch');

// Función para cambiar el modo
function cambiarModo() {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    guardarModo(); // Guardar el modo actual en localStorage
}

// Función para guardar el modo en localStorage
function guardarModo() {
    const modoActual = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('modo', modoActual); // Guardar el modo actual en localStorage con la clave "modo"
}

// Función para cargar el modo desde localStorage
function cargarModo() {
    const modoGuardado = localStorage.getItem('modo'); // Obtener el modo guardado en localStorage
    if (modoGuardado === 'dark') {
        cambiarModo(); // Cambiar al modo oscuro si está guardado como oscuro
    }
}

// Cargar el modo al cargar la página
cargarModo();

// Agregar evento clic al botón para cambiar el modo
btnSwitch.addEventListener('click', function() {
    cambiarModo();
    guardarModo(); // Guardar el modo actual en localStorage
});
