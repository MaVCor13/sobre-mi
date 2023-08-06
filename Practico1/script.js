document.addEventListener("DOMContentLoaded", function () {
    var operand1Input = document.getElementById("operand1");
    var operand2Input = document.getElementById("operand2");
    var operatorSelect = document.getElementById("operator");
    var resultOutput = document.getElementById("result");

    document.getElementById("calculate").addEventListener("click", function () {
        var operand1 = parseFloat(operand1Input.value);
        var operand2 = parseFloat(operand2Input.value);
        var operator = operatorSelect.value;
        var result = 0;

        // Validar si los operandos son números válidos y no están vacíos
        if (isNaN(operand1) || isNaN(operand2)) {
            resultOutput.textContent = "Error: Ingresa números válidos en ambos campos";
            return;
        }

        // Realizar operaciones según el operador seleccionado
        switch (operator) {
            case "sum":
                result = operand1 + operand2;
                break;
            case "subtract":
                result = operand1 - operand2;
                break;
            case "multiply":
                result = operand1 * operand2;
                break;
            case "divide":
                if (operand2 !== 0) {
                    result = operand1 / operand2;
                } else {
                    resultOutput.textContent = "Error: No se puede dividir por cero";
                    return;
                }
                break;
        }

        // Manejar resultados demasiado grandes o pequeños
        if (!isFinite(result)) {
            resultOutput.textContent = "Error: Resultado fuera de rango";
            return;
        }

        resultOutput.textContent = "Resultado: " + result;
    });

    document.getElementById("clear").addEventListener("click", function () {
        operand1Input.value = "";
        operand2Input.value = "";
        resultOutput.textContent = "Resultado: ";
    });
});

