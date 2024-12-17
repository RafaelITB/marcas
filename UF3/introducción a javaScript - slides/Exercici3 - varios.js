// Función para comparar dos números
function compararNumeros() {
    const numero1 = parseInt(document.getElementById("num1").value);
    const numero2 = parseInt(document.getElementById("num2").value);
    let resultado1;
    if (isNaN(numero1) || isNaN(numero2)) {
        resultado = "Por favor, ingresa dos números válidos.";
      } else if (numero1 > numero2) {
        resultado = `El número ${numero1} es mayor que ${numero2}.`;
      } else if (numero2 > numero1) {
        resultado = `El número ${numero2} es mayor que ${numero1}.`;
      } else {
        resultado = "Ambos números son iguales.";
      }
    
      document.getElementById("resultadoComparacion").innerText = resultado;
}
  
  // Función para multiplicar dos números sin usar '*'
  function multiplicarNumeros() {
    const numeroA = parseInt(document.getElementById("numA").value);
    const numeroB = parseInt(document.getElementById("numB").value);
    let resultado2 = 0;
    let proceso =  "";
    if (isNaN(numeroA) || isNaN(numeroB)) {resultado = "Por favor, ingresa dos números válidos.";} else {
        const esNegativo = (numeroA < 0) ^ (numeroB < 0); // XOR para detectar signo
        const absA = Math.abs(numeroA);
        const absB = Math.abs(numeroB);
    
        for (let i = 0; i < absB; i++) {
        resultado2 += absA;
        proceso += (" + " + absA)
        }
    
        if (esNegativo) resultado2 = -resultado2;
        document.getElementById("resultadoMultiplicacion").innerText = (proceso.replace(/^ \+ /, '') + " = " + resultado2);
    }  
}

function multiplicar3Numeros() {
    const numeroX = parseInt(document.getElementById("numX").value);
    const numeroY = parseInt(document.getElementById("numY").value);
    const numeroZ = parseInt(document.getElementById("numZ").value);
    let resultado3 = 0;
    let proceso1 = "";
    let proceso2 = "";
    if (isNaN(numeroX) || isNaN(numeroY) || isNaN(numeroZ)) {
        document.getElementById("resultadoMultiplicacion3").innerText = "Por favor, ingresa tres números válidos.";
        return;
    }
    const esNegativo = (numeroX < 0) ^ (numeroY < 0) ^ (numeroZ < 0); // XOR para detectar signo negativo
    const absX = Math.abs(numeroX);
    const absY = Math.abs(numeroY);
    const absZ = Math.abs(numeroZ);
    
    for (let i = 0; i < absY; i++) {
        resultado3 += absX;
        proceso1 += (" + " + absX);
    }

    let resultadoFinal = 0;
    for (let i = 0; i < absZ; i++) {
        resultadoFinal += resultado3;
        proceso2 += (" + " + resultado3);
    }

    if (esNegativo) resultadoFinal = -resultadoFinal;

    document.getElementById("resultadoMultiplicacion3").innerText = 
        proceso1.replace(/^ \+ /, '') + " = " + resultado3 + "\n" + 
        proceso2.replace(/^ \+ /, '') + " = " + resultadoFinal;
}

function encontrarNumeros() {
    let resultados = [];
    for (let num = 1; num <= 10000; num++) {
        let sumaCifras = num.toString().split('').reduce((acc, cifra) => acc + Math.pow(parseInt(cifra), 3), 0);
        if (sumaCifras === num) {
            resultados.push(num);
        }
    }
    document.getElementById("resultado").innerText = "Números que cumplen la propiedad: " + resultados.join(", ");
}


function calcularNotaMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById("resultadoNotaMedia").innerText = "Por favor, ingresa notas válidas.";
    } else {
        const media = ((nota1 + nota2 + nota3) / 3).toFixed(1);
        document.getElementById("resultadoNotaMedia").innerText = "La media es: " + media;
    }
}

function calcularCubo() {
    const numero = document.getElementById("numeroCubo").value;
    if (isNaN(numero)) {
        alert("No es un número.");
        document.getElementById("resultadoCubo").innerText = "Por favor, ingresa un número válido.";
        return false;
    }

    const numeroEntero = parseInt(numero);
    if (numero != numeroEntero) {
        alert("El número no es un entero.");
        document.getElementById("resultadoCubo").innerText = "Por favor, ingresa un número entero.";
        return false;
    }

    const cubo = Math.pow(numeroEntero, 3);
    document.getElementById("resultadoCubo").innerText = "El cubo de " + numeroEntero + " es: " + cubo;
}
