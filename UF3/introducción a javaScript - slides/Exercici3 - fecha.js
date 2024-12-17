window.onload = function() {
    var fecha = new Date();
    var fechaFormateada = fecha.toLocaleDateString();
    document.getElementById("fechaActual").innerText = "Fecha actual: " + fechaFormateada;
    
    var diaSemana = fecha.getDay();
    var hora = fecha.getHours();
    
    if (diaSemana === 1 && hora >= 15 && hora < 18) {
        document.getElementById("M04checker").innerText = "estas en clase de M04";
    } 
    if (diaSemana === 2 && hora >= 17 && hora < 19) {
        document.getElementById("M04checker").innerText = "estas en clase de M04";
    }
    if (diaSemana === 4 && hora >= 16 && hora < 18) {
        document.getElementById("M04checker").innerText = "estas en clase de M04";
    }  else {
        document.getElementById("M04checker").innerText = "No estas en clase de M04";
    }
    comprobarFinDeSemana()
}

function comprobarFinDeSemana() {
    var fechaBase = "09/24/";
    let resultados = [];

    for (let año = 2024; año < 2024 + 36; año++) {
        var fechaComprobada = new Date(año, 8, 24);
        var diaSemana = fechaComprobada.getDay();

        if (diaSemana === 0 || diaSemana === 6) {
            resultados.push(año);
        }
    }
    document.getElementById("resultadoFinDeSemana").innerText = "Años donde la Mercè que caen en fin de semana:\n\n" + resultados.join("\n");
}

function actualizarReloj() {
    var fecha = new Date();
    var horas = String(fecha.getHours()).padStart(2, '0');
    var minutos = String(fecha.getMinutes()).padStart(2, '0');
    var segundos = fecha.getSeconds();
    
    document.getElementById("reloj").innerText = `${horas}:${minutos}:${segundos}`;
}

setInterval(actualizarReloj, 1000);
