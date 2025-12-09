function realizarOperacion(operacion) {
    const inputNum1 = document.getElementById("num1").value;
    const inputNum2 = document.getElementById("num2").value;
    const resultadoDisplay = document.getElementById("resultado");

    const num1 = parseFloat(inputNum1) || 0;
    const num2 = parseFloat(inputNum2) || 0;

    let resultado;

    switch (operacion) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            if (num2 === 0) {
                resultadoDisplay.value = "Error: División por cero";
                return; 
            }
            resultado = num1 / num2;
            break;
        default:
            resultadoDisplay.value = "Operación no válida";
            return;
    }

    resultadoDisplay.value = resultado;
}