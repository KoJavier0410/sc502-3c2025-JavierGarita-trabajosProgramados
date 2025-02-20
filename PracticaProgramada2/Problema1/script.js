function calcularDeducciones() {
    let salarioBruto = parseFloat(document.getElementById("salario").value);
    
    if (isNaN(salarioBruto) || salarioBruto <= 0) {
        alert("Por favor, ingrese un salario válido.");
        return;
    }

    // Cargas sociales (aproximadamente 10.5% del salario bruto)
    let cargasSociales = salarioBruto * 0.105;

    // Impuesto sobre la renta según tramos en Costa Rica (2024)
    let impuestoRenta = 0;
    if (salarioBruto > 941000 && salarioBruto <= 1381000) {
        impuestoRenta = (salarioBruto - 941000) * 0.10;
    } else if (salarioBruto > 1381000 && salarioBruto <= 2423000) {
        impuestoRenta = (440000 * 0.10) + ((salarioBruto - 1381000) * 0.15);
    } else if (salarioBruto > 2423000) {
        impuestoRenta = (440000 * 0.10) + (1042000 * 0.15) + ((salarioBruto - 2423000) * 0.20);
    }

    let salarioNeto = salarioBruto - cargasSociales - impuestoRenta;

    document.getElementById("cargasSociales").textContent = "₡" + cargasSociales.toLocaleString("es-CR", { minimumFractionDigits: 2 });
    document.getElementById("impuestoRenta").textContent = "₡" + impuestoRenta.toLocaleString("es-CR", { minimumFractionDigits: 2 });
    document.getElementById("salarioNeto").textContent = "₡" + salarioNeto.toLocaleString("es-CR", { minimumFractionDigits: 2 });
}