let intentos = 0; // Contador de intentos fallidos
let numerosCorrectos = generarNumerosAleatorios();

function generarNumerosAleatorios() {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros.push(Math.floor(Math.random() * 10));
    }
    return numeros;
}

function verificarCerradura() {
    if (intentos >= 4) {
        document.getElementById("ans").innerHTML = "Has alcanzado el número máximo de intentos. No se permiten más intentos.";
        document.getElementById("btnVerificar").disabled = true; // Deshabilitar el botón después de 4 intentos
        return;
    }

    const numA = document.getElementById("numA").value.trim();
    const numB = document.getElementById("numB").value.trim();
    const numC = document.getElementById("numC").value.trim();
    const numD = document.getElementById("numD").value.trim();
    const numE = document.getElementById("numE").value.trim();

    let mensaje = "";
    let todoCorrecto = true;
    let entradasValidas = true;

    const verificarEntrada = (entrada) => {
        return entrada !== "" && !isNaN(entrada) && entrada >= 0 && entrada <= 9 && Number.isInteger(Number(entrada));
    };

    if (!verificarEntrada(numA) || !verificarEntrada(numB) || !verificarEntrada(numC) || !verificarEntrada(numD) || !verificarEntrada(numE)) {
        mensaje = "Solo se aceptan números enteros del 0 al 9, sin espacios. Por favor, revisa las entradas.";
        entradasValidas = false;
    }

    if (entradasValidas) {
        if (numA == numerosCorrectos[0]) {
            mensaje += "El número en la posición 1 es correcto: " + numA + "<br>";
        } else if (numerosCorrectos.includes(Number(numA))) {
            mensaje += "El número en la posición 1 es correcto pero no está en el lugar correcto.<br>";
            todoCorrecto = false;
        }

        if (numB == numerosCorrectos[1]) {
            mensaje += "El número en la posición 2 es correcto: " + numB + "<br>";
        } else if (numerosCorrectos.includes(Number(numB))) {
            mensaje += "El número en la posición 2 es correcto pero no está en el lugar correcto.<br>";
            todoCorrecto = false;
        }

        if (numC == numerosCorrectos[2]) {
            mensaje += "El número en la posición 3 es correcto: " + numC + "<br>";
        } else if (numerosCorrectos.includes(Number(numC))) {
            mensaje += "El número en la posición 3 es correcto pero no está en el lugar correcto.<br>";
            todoCorrecto = false;
        }

        if (numD == numerosCorrectos[3]) {
            mensaje += "El número en la posición 4 es correcto: " + numD + "<br>";
        } else if (numerosCorrectos.includes(Number(numD))) {
            mensaje += "El número en la posición 4 es correcto pero no está en el lugar correcto.<br>";
            todoCorrecto = false;
        }

        if (numE == numerosCorrectos[4]) {
            mensaje += "El número en la posición 5 es correcto: " + numE + "<br>";
        } else if (numerosCorrectos.includes(Number(numE))) {
            mensaje += "El número en la posición 5 es correcto pero no está en el lugar correcto.<br>";
            todoCorrecto = false;
        }

        if (todoCorrecto) {
            mensaje = "¡Se ha abierto la cerradura!";
        }
    }

    document.getElementById("ans").innerHTML = mensaje;

    // Si no se ha abierto la cerradura, aumenta los intentos
    if (!todoCorrecto) {
        intentos++;
    }
}
