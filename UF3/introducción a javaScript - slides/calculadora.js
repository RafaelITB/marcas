var valor1 = "";
var valor2 = "";
var op = false;
var end = false;

document.addEventListener("DOMContentLoaded", () => {


    function actualizarRec() {
        if (op) {
            document.getElementById('rec2').innerText = valor2;
        } else {
            document.getElementById('rec1').innerText = valor1;
        }
    }

    document.getElementById('bmas').addEventListener('click', () => {
        op = true;
        actualizarRec();
    });

    function agregarNumero(numero) {
        if (end) return;

        if (op) {
            valor2 += numero;
        } else {
            valor1 += numero;
        }
        actualizarRec();
    }

    document.getElementById("num1").addEventListener("click", () => agregarNumero("1"));
    document.getElementById("num2").addEventListener("click", () => agregarNumero("2"));
    document.getElementById("num3").addEventListener("click", () => agregarNumero("3"));
    document.getElementById("num4").addEventListener("click", () => agregarNumero("4"));
    document.getElementById("num5").addEventListener("click", () => agregarNumero("5"));
    document.getElementById("num6").addEventListener("click", () => agregarNumero("6"));
    document.getElementById("num7").addEventListener("click", () => agregarNumero("7"));
    document.getElementById("num8").addEventListener("click", () => agregarNumero("8"));
    document.getElementById("num9").addEventListener("click", () => agregarNumero("9"));

    document.getElementById('ans').addEventListener('click', () => {
        if (valor1 && valor2 && op) {
            const suma = (parseInt(valor1) + parseInt(valor2)).toString();
            document.getElementById('rec3').innerText = suma;
            end = true;
            actualizarRec();
        } else { alert("realiza una operación correcta")}
    });
});
