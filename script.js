let display = document.getElementById("display");

function agregar(valor) {
    let partes = display.value.split(/[\+\-\*\/]/);
    let ultimoNumero = partes[partes.length - 1];

    if (valor === "." && ultimoNumero.includes(".")) {
        return;
    }

    display.value += valor;
}

function operacion(op) {
    let valorActual = display.value.trim();

    if (valorActual === "") {
        return;
    }
    if (/[+\-*/]\s*$/.test(valorActual)) {
        return;
    }

    display.value += " " + op + " ";
}

function calcular() {
    if (display.value.trim() === "") {
        display.value = ""; 
        return;
    }

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
function limpiar() {
    display.value = "";
}

function borrarUltimo() {
    display.value = display.value.slice(0, -1);
}
