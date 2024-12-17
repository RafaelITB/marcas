
function comprobarAs() {
    const inputString = document.getElementById("string1").value;
    if (inputString.startsWith("As")) {
        document.getElementById("resultado1").innerText = inputString;
    } else {
        document.getElementById("resultado1").innerText = "As" + inputString;
    }
}



function eliminarCaracter() {
    const inputString = document.getElementById("string2").value;
    let posicion = parseInt(document.getElementById("posicion").value);
    if (posicion < 0 || posicion >= inputString.length) {
        document.getElementById("resultado2").innerText = "Posición inválida.";
    } else {
        const resultString = inputString.slice(0, posicion - 1) + inputString.slice(posicion);
        document.getElementById("resultado2").innerText = resultString;
    }
}



function intercambiarCaracteres() {
    const inputString = document.getElementById("string3").value;
    if (inputString.length > 0) {
        const intercambiado = inputString[inputString.length - 1] + inputString.slice(1, inputString.length - 1) + inputString[0];
        document.getElementById("resultado3").innerText = intercambiado;
    } else {
        document.getElementById("resultado3").innerText = "El string debe tener longitud mayor que 0.";
    }
}
