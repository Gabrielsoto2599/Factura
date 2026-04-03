class Cl_Articulo {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    subtotalArticulo() {
        return this.cantidad * this.precio;
    }
}

class Cl_Factura {
    constructor() {
        this.acSubtotal = 0;
        this.ivaPorcentaje = 0.16; // Usar punto para decimales
    }

    procesarArticulo(a) {
        // Sumamos el subtotal del artículo al acumulador de la factura
        this.acSubtotal += a.subtotalArticulo();
    }

    calcularIVA() {
        return this.acSubtotal * this.ivaPorcentaje;
    }

    calcularTotal() {
        return this.acSubtotal + this.calcularIVA();
    }
}

// 1. Instanciamos los artículos con nombres en "Strings" (comillas)
const art1 = new Cl_Articulo("Jabon", 30, 1);
const art2 = new Cl_Articulo("Crema dental", 25, 2);
const art3 = new Cl_Articulo("Desodorante", 50, 1);
const art4 = new Cl_Articulo("Papel", 15, 3);
const art5 = new Cl_Articulo("Afeitadora", 10, 1);

// 2. Procesamos la factura
const factura = new Cl_Factura();
factura.procesarArticulo(art1);
factura.procesarArticulo(art2);
factura.procesarArticulo(art3);
factura.procesarArticulo(art4);
factura.procesarArticulo(art5);

// 3. Salida por pantalla mejorada
const salida = document.getElementById("app");
salida.innerHTML = "<h1>Resultados de Facturación:</h1>";
salida.innerHTML += `<p>Subtotal ${art1.nombre}: $${art1.subtotalArticulo()}</p>`;
salida.innerHTML += `<p>Subtotal ${art2.nombre}: $${art2.subtotalArticulo()}</p>`;
salida.innerHTML += `<p>Subtotal ${art3.nombre}: $${art3.subtotalArticulo()}</p>`;
salida.innerHTML += `<p>Subtotal ${art4.nombre}: $${art4.subtotalArticulo()}</p>`;
salida.innerHTML += `<p>Subtotal ${art5.nombre}: $${art5.subtotalArticulo()}</p>`;

salida.innerHTML += "<hr>";
salida.innerHTML += `<p><strong>Subtotal Factura:</strong> $${factura.acSubtotal}</p>`;
salida.innerHTML += `<p><strong>IVA (16%):</strong> $${factura.calcularIVA().toFixed(2)}</p>`;
salida.innerHTML += `<p><strong>TOTAL A PAGAR:</strong> $${factura.calcularTotal().toFixed(2)}</p>`;

 
