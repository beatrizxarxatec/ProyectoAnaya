const totalDePuntos = 1000;
const puntosPorEstudiante = [0, 0, 0, 0, 0, 0, 0];
let estudianteSeleccionado = -1;
let puntosSeleccionados = -1;

const accionEstudiante = [];
const accionPuntos = [];

function MostrarTotalPuntos() { 
    document.getElementById("TotalPuntos").innerText = totalDePuntos;
}

function ObtenerPuntosOtorgados() { 
    let puntosOtorgados = 0;
    for (let i = 0; i < puntosPorEstudiante.length; i++) { 
        puntosOtorgados = puntosOtorgados + puntosPorEstudiante[i];
    }
    return puntosOtorgados;
}

function MostrarPuntosOtorgados() {
    let puntosOtorgados = ObtenerPuntosOtorgados();
    document.getElementById("PuntosOtorgados").innerText = puntosOtorgados; 
}

function MostrarPuntosRestantes() { 
    let puntosOtorgados = ObtenerPuntosOtorgados();
    let puntosRestantes = totalDePuntos - puntosOtorgados; 
    document.getElementById("PuntosRestantes").innerText = puntosRestantes; 
}

function MostrarPuntosDelEstudianteSeleccionado() {
    let textoPuntosDelEstudiante = "";
    if (estudianteSeleccionado >= 0) { 
        const puntosDelEstudiante = puntosPorEstudiante[estudianteSeleccionado];
        textoPuntosDelEstudiante = puntosDelEstudiante;
    }
    document.getElementById("PuntosDelEstudiante").innerText = textoPuntosDelEstudiante; 
}

MostrarTotalPuntos();
MostrarPuntosOtorgados();
MostrarPuntosRestantes();

function EstudianteSeleccionadoChange(e) { 
    estudianteSeleccionado = document.getElementById("EstudianteSeleccionado").value - 1;
    MostrarPuntosDelEstudianteSeleccionado();
    document.getElementById("Imagen4").src = "Imagenes" + "/" + (estudianteSeleccionado + 1) + ".png"; 
}

function PuntosSeleccionadoChange(e) {
    puntosSeleccionados = Number(document.getElementById("PuntosSeleccionados").value);  
}

function OtorgarPuntos() {
    if (estudianteSeleccionado >= 0 && puntosSeleccionados > 0) { 
        const puntosOtorgados = ObtenerPuntosOtorgados(); 
        if (puntosOtorgados + puntosSeleccionados <= totalDePuntos) { 
            puntosPorEstudiante[estudianteSeleccionado] = puntosPorEstudiante[estudianteSeleccionado] + puntosSeleccionados;

        
            accionEstudiante.push(estudianteSeleccionado);
            accionPuntos.push(puntosSeleccionados);

            MostrarTotalPuntos();
            MostrarPuntosOtorgados();
            MostrarPuntosRestantes();
            MostrarPuntosDelEstudianteSeleccionado();
        }
        else {
            alert("No quedan suficientes puntos");
        }
    }
    else {
        alert("Debes de seleccionar un estudiante y cantidad de puntos primero");
    }
}

function Retroceder() {
    if (accionEstudiante.length > 0) { 
        const estudianteRetroceso = accionEstudiante.pop();  
        const puntosRetroceso = accionPuntos.pop(); 
        puntosPorEstudiante[estudianteRetroceso] = puntosPorEstudiante[estudianteRetroceso] - puntosRetroceso; 

        MostrarTotalPuntos();
        MostrarPuntosOtorgados();
        MostrarPuntosRestantes();
        MostrarPuntosDelEstudianteSeleccionado();
    }
}


document.getElementById("EstudianteSeleccionado").addEventListener("change", EstudianteSeleccionadoChange);
document.getElementById("PuntosSeleccionados").addEventListener("change", PuntosSeleccionadoChange); 
document.getElementById("boton").addEventListener("click", OtorgarPuntos);
document.getElementById("boton1").addEventListener("click", Retroceder);











