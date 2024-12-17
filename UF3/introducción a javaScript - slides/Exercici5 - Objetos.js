let estudiante1 = {
    nombre: "Eduardo",
    curso: "ASIXc 1A",
    edad: 18
};

let resultadoHTML = '';

resultadoHTML += `<p><strong>a. Listar las propiedades del objeto:</strong> ${JSON.stringify(estudiante1)}</p>`;

delete estudiante1.edad;
resultadoHTML += `<p><strong>b. Eliminar una propiedad y volver a listar:</strong> ${JSON.stringify(estudiante1)}</p>`;

estudiante1.fecha_nacimiento = "2006-03-15";
estudiante1.apellidos = "Pérez";
resultadoHTML += `<p><strong>c. Añadir propiedades 'fecha_nacimiento' y 'apellidos':</strong> ${JSON.stringify(estudiante1)}</p>`;

function calculaEdad(alumno) {
    let fechaNacimiento = new Date(alumno.fecha_nacimiento);
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let mes = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    
    alumno.edad = edad;
    return alumno;
}

if (Date.parse(estudiante1.fecha_nacimiento)) {
    estudiante1 = calculaEdad(estudiante1);
    resultadoHTML += `<p><strong>d. Calcular la edad:</strong> Edad de estudiante1 calculada: ${estudiante1.edad}</p>`;
}

let estudiante2 = {
    nombre: "Rafael",
    curso: "ASIXc 2B",
    edad: 20,
    fecha_nacimiento: "2004-04-21",
    apellidos: "Guiotto Silva"
};

let estudiante3 = {
    nombre: "Rafael",
    curso: "ASIXc 2B",
    edad: 20,
    fecha_nacimiento: "2004-04-21",
    apellidos: "Guiotto Silva"
};

resultadoHTML += `<p><strong>Crear dos objetos estudiantes iguales:</strong> ${JSON.stringify(estudiante3)} y ${JSON.stringify(estudiante2)}</p>`;

let propiedadesIguales = JSON.stringify(estudiante3) === JSON.stringify(estudiante2);
resultadoHTML += `<p><strong>¿Son iguales? </strong> ${propiedadesIguales}</p>`;

estudiante2.nombre = "Carlos";
estudiante2.curso = "2º Bachillerato";
resultadoHTML += `<p><strong>Modificación de estudiante2:</strong> ${JSON.stringify(estudiante2)}</p>`;

propiedadesIguales = JSON.stringify(estudiante3) === JSON.stringify(estudiante2);
resultadoHTML += `<p><strong>¿Son iguales después de modificar uno?</strong> ${propiedadesIguales}</p>`;

document.getElementById('resultado').innerHTML = resultadoHTML;
