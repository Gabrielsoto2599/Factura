

 class Cl_Articulo{
    constructor(nombre, precio, cantidad){
       this.nombre= nombre
       this.precio= precio
       this.cantidad= cantidad
    }
    
    subtotalArticulo(){
        let st=0
    st= this.cantidad*this.precio
    return st
    }
    
}

 class Cl_Factura{
    constructor(){
    this.subtotalFactura=0
    this.totalfacutaIVA=0
    this.totalFact=0
    this.acFactura=0
    
    }

    procesarArticulo(a){
    
    this.subtotalFactura= this.acFactura
    this.totalfacutaIVA= this.acFactura * 0,16 
    this.totalFact= this.totalfacutaIVA
    }
}
 


Articulo1 = new Cl_Articulo(Articulo1, 30, 1)
Articulo2 = new Cl_Articulo(Articulo1, 25, 2)
Articulo3 = new Cl_Articulo(Articulo1, 50, 1)
Articulo4 = new Cl_Articulo(Articulo3, 15, 3)
Articulo5 = new Cl_Articulo(Articulo1, 10, 1)


Factura = new Cl_Factura()
Factura.procesarArticulo(Articulo1)
Factura.procesarArticulo(Articulo2)
Factura.procesarArticulo(Articulo3)
Factura.procesarArticulo(Articulo4)
Factura.procesarArticulo(Articulo5)

salida = document.getElementById("app")
salida.innerHTML = "Resultados:"

salida.innerHTML += `<br>`
salida.innerHTML += `<br>subtotal Jabon ${Articulo1.subtotalArticulo()}`
salida.innerHTML += `<br>subtotal Cremadental ${Articulo2.subtotalArticulo()}`
salida.innerHTML += `<br>subtotal Desodorante ${Articulo3.subtotalArticulo()}`
salida.innerHTML += `<br>subtotal Papel ${Articulo4.subtotalArticulo()}`
salida.innerHTML += `<br>subtotal Afeitadora ${Articulo5.subtotalArticulo()}`
salida.innerHTML += `<br>`
salida.innerHTML += `<br>subtotal de Factura ${Factura.subtotalFactura()}`
salida.innerHTML += `<br>IVA a Cobrar ${Factura.totalfacutaIVA()}`
salida.innerHTML += `<br>Total a Pagar ${Factura.totalFact()}`



