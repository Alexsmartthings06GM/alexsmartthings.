// Defino variable de contador que al principio vale 0
var contador = 0;
var segundoInicio = 10;  // Valor inicial de la cuenta regresiva
var puedeHacerClick = true;  

// CUENTA REGRESIVA
function actualizar() {
    document.getElementById('countdown').innerHTML = segundoInicio;

    if (segundoInicio === 0) {
        // Cuenta regresiva ha finalizado
        document.getElementById('countdown').innerHTML = "Contador finalizado";
        puedeHacerClick = false;  // Deshabilito los clics cuando termina la cuenta regresiva
        alert("Has hecho " + contador + " clicks.");
        resetearContador(); 
    } else {
        segundoInicio -= 1;
        setTimeout(actualizar, 1000);
    }
}

function incrementarContador() {
    // Solo incrementa el contador si puedeHacerClick es verdadero
    if (puedeHacerClick) {
        contador++;
        document.getElementById("puntos").innerHTML = contador;
        document.getElementById("botonReset").style.display = "block";
    }
}

function resetearContador() {
    // contador a 0
    contador = 0;

    // Reinicio el contador y pongo para hacer clics otra vez
    segundoInicio = 10; 
    puedeHacerClick = true;  
    actualizar();  

    // Actualizo los puntos y oculto botonReset
    document.getElementById("puntos").innerHTML = contador;
    document.getElementById("botonReset").style.display = "none";
}

// Inicia la cuenta regresiva la primera vez
actualizar();



