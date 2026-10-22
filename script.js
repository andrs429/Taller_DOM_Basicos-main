function sumar() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let suma = num1 + num2;
    document.getElementById("Resultado").value = suma;
}

function restar() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resta = num1 - num2;
    document.getElementById("Resultado").value = resta;
}

function multiplicar() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let mul = num1 * num2;
    document.getElementById("Resultado").value = mul;
}

function dividir() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let div = num1 / num2;
    document.getElementById("Resultado").value = div;
}

function calcular(){
    let cant = parseInt(document.getElementById("cantidad").value);
    let precioUni = parseInt(document.getElementById("precioUnitario").value);
    let iva = 0.19;
    let descuento = 0;
    let subtotal = cant * precioUni;
    let calIva = subtotal * iva;

    if(cant >= 10){
        descuento = 0.10;
    }
    let calcularDescuento = subtotal * descuento;
    let totalPagar = (subtotal + calIva) - calcularDescuento;

    document.getElementById("Subtotal").value = subtotal.toLocaleString();
    document.getElementById("IVA").value = calIva.toLocaleString();
    document.getElementById("Descuento").value = calcularDescuento.toLocaleString();
    document.getElementById("TotalPagar").value = totalPagar.toLocaleString();
}

function calcularPromedio() {
    let nota1 = parseFloat(document.getElementById("Nota1").value);
    let nota2 = parseFloat(document.getElementById("Nota2").value);
    let nota3 = parseFloat(document.getElementById("Nota3").value);
    let prom  = (nota1 + nota2 + nota3) / 3;
    document.getElementById("Resultadoprom").value = prom.toFixed(1);
}

function calcularSalario() {
    let horas = parseInt(document.getElementById("horasTrabajadas").value);
    let valor = parseInt(document.getElementById("valorHora").value);
    let totalPagar = horas * valor;

    document.getElementById("salarioPagar").value = totalPagar.toLocaleString();
}

function CalcularPresupuesto(){
    let NumeroInvitados = parseInt(document.getElementById("numInvitados").value);
    let CostoComida = parseInt(document.getElementById("costComida").value);
    let CostoBebida = parseInt(document.getElementById("costBebida").value);
    let CostoDecoracion = parseInt(document.getElementById("costDecoracion").value);
    let CostoMusica = parseInt(document.getElementById("costMusica").value);
    let Propina = parseInt(document.getElementById("propina").value);

    let calculoComida = NumeroInvitados * CostoComida;
    let calculoBebida = NumeroInvitados * CostoBebida;
    let subtotal = calculoComida + calculoBebida + CostoDecoracion + CostoMusica;
    let calculoPropina = subtotal * (Propina / 100);
    let TotalGeneral = subtotal + calculoPropina;
    let CostoPorInvitado = TotalGeneral / NumeroInvitados;

    document.getElementById("comidatotal").innerText = calculoComida.toLocaleString();
    document.getElementById("bebidatotal").innerText = calculoBebida.toLocaleString();
    document.getElementById("decoraciontotal").innerText = CostoDecoracion.toLocaleString();
    document.getElementById("musicatotal").innerText = CostoMusica.toLocaleString();
    document.getElementById("propinatotal").innerText = calculoPropina.toLocaleString();
    document.getElementById("subtotal").innerText = subtotal.toLocaleString();
    document.getElementById("totalgeneral").innerText = TotalGeneral.toLocaleString();
    document.getElementById("costoporinvitado").innerText = CostoPorInvitado.toLocaleString();
}