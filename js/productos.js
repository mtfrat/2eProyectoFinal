//-------------------------Secccion de productos------------------------------------------

// Clase para la manipulación de produtos

class producto {
    constructor(nombre, codigo, precio) {
        this.nombre = nombre
        this.codigo = codigo
        this.precio = precio
    }

    nombreProducto() {
        return this.nombre
    }

    codigoProducto() {
        return this.codigo
    }

    precioProducto() {
        return this.precio
    }
}


// Ingreso productos
let televisor = new producto("televisor", "0001", 10000)
let computadora = new producto("computadora", "0002", 50000)
let aire = new producto("aire acondicionado", "0003", 70000)

// Controlo si los datos ingresados son correctos

function verificionDeDatos(codigo,metodo,cuotas) {
    if (codigo !== "0001" && codigo !== "0002" && codigo !== "0003") {
        alert("El codigo ingresado es incorrecto")
        return false
    }
    if (metodo !== "tarjeta de debito" && metodo !== "tarjeta de credito" && metodo !== "efectivo") {
        alert("El metodo de pago ingresado es incorrecto")
        return false
    }
    if (cuotas !== "3" && cuotas !== "6" && cuotas !== "12") {
        alert("La cantidad de cuotas ingresadas es incorrecta")
        return false
    }
    else{
        return true
    }
}

//Leo datos ingresados

let leoDatos = function () {
    let codigoIngresado = document.getElementById("codigo").value
    let metodoDePago = document.getElementById("metodoPago").value
    let cuotasIngresadas = document.getElementById("cuotas").value

    metodoDePago = metodoDePago.toLowerCase()

    let resultado = verificionDeDatos(codigoIngresado,metodoDePago,cuotasIngresadas)

    // Muestro los valores ingresados mediante evento de click
    if(resultado){
        let formulario = document.getElementById("diseñoFormulario")

        let parrafo = document.createElement("p")
        parrafo.className = 'parrafoProductos';

        parrafo.innerHTML = `El codigo del producto es ${codigoIngresado} pagando con ${metodoDePago} a ${cuotasIngresadas} cuotas`

        formulario.appendChild(parrafo)
    }
}

botonCompra = document.getElementById("botonCompra")
botonCompra.addEventListener("click",leoDatos)

