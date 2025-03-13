let display = document.getElementById("display");

function agregar(valor) {
    let partes = display.value.split(/[\+\-\*\/]/);
    let ultimoNumero = partes[partes.length - 1].trim();

    // Evita múltiples puntos en el mismo número
    if (valor === "." && ultimoNumero.includes(".")) {
        return;
    }

    display.value += valor;
}

function operacion(op) {
    let valorActual = display.value.trim();
    let ultimoCaracter = valorActual.slice(-1);

    // Reemplazar operador si ya hay uno
    if (/[+\-*/]$/.test(ultimoCaracter)) {
        display.value = valorActual.slice(0, -1) + (op === "×" ? "*" : op === "÷" ? "/" : op);
        return;
    }

    if (valorActual === "") {
        return; // Evita operadores al inicio
    }

    display.value += " " + (op === "×" ? "*" : op === "÷" ? "/" : op) + " ";
}

function calcular() {
    let expresion = display.value.trim();

    if (expresion === "" || /[+\-*/]$/.test(expresion)) {
        return; // Evita cálculos inválidos
    }

    try {
        display.value = eval(expresion);
    } catch {
        display.value = "Error";
    }
}

function limpiar() {
    display.value = "";
}

function borrarUltimo() {
    display.value = display.value.trim().slice(0, -1);
}


