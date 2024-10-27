// Defino variable de contador que al principio vale 0
var contador = 0;
var segundoInicio = 10;  // Valor inicial de la cuenta regresiva
var puedeHacerClick = true;  // Variable para habilitar o deshabilitar clics

function incrementarContador() {
    // Solo incrementa el contador si puedeHacerClick es verdadero
    if (puedeHacerClick) {
        contador++;

        // Actualizo los puntos (apunta al css) y muestro el botonReset
        document.getElementById("puntos").innerHTML = contador;
        document.getElementById("botonReset").style.display = "block";
    }
}

function resetearContador() {
    // Pongo el contador a 0
    contador = 0;

    // Reinicio la cuenta regresiva y habilito los clics nuevamente
    segundoInicio = 10;  // Restablezco el valor inicial
    puedeHacerClick = true;  // Permito nuevamente los clics
    actualizar();  // Reinicio la cuenta regresiva

    // Actualizo los puntos y oculto botonReset
    document.getElementById("puntos").innerHTML = contador;
    document.getElementById("botonReset").style.display = "none";
}

// CUENTA REGRESIVA
function actualizar() {
    document.getElementById('countdown').innerHTML = segundoInicio;

    if (segundoInicio === 0) {
        // Cuenta regresiva ha finalizado
        document.getElementById('countdown').innerHTML = "Contador finalizado";
        puedeHacerClick = false;  // Deshabilito los clics cuando termina la cuenta regresiva
    } else {
        segundoInicio -= 1;
        setTimeout(actualizar, 1000);
    }
}

// Inicia la cuenta regresiva la primera vez
actualizar();


