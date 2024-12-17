window.onload = function() {
    const fecha = new Date();
    const fechaFormateada = fecha.toLocaleDateString();
    document.getElementById("fechaActual").innerText = "Fecha actual: " + fechaFormateada;
    
    const diaSemana = fecha.getDay();
    const hora = fecha.getHours();
    
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
    const fechaBase = "09/24/";
    let resultados = [];

    for (let año = 2024; año < 2024 + 36; año++) {
        const fechaComprobada = new Date(año, 8, 24);
        const diaSemana = fechaComprobada.getDay();

        if (diaSemana === 0 || diaSemana === 6) {
            resultados.push(año);
        }
    }
    document.getElementById("resultadoFinDeSemana").innerText = "Años donde la Mercè que caen en fin de semana:\n\n" + resultados.join("\n");
}

function actualizarReloj() {
    const fecha = new Date();
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const segundos = fecha.getSeconds();  // No usamos padStart para los segundos
    
    document.getElementById("reloj").innerText = `${horas}:${minutos}:${segundos}`;
}

setInterval(actualizarReloj, 1000);
