/// Walter Cobacango 
// Pagina: www.fybeca.com

// Fundamentos-funciones 

// 1. Variables 
var quantityProduct= 120
const nameProduct= "Sérum Effaclar Ultra"
let ID= "42773345"

// 2. String
const nombreProducto= "     Sérum Effaclar Ultra    ";
const precios= 42.77;
const disponibilidad= true;
console.log(`El producto ${nombreProducto} posee un precio de ${precios} el cual se encuentra ${disponibilidad} en la pagina de Fybeca`);

// 3. Operativos 
let preciosAntiarrugas=57.35
let precioCremaFacila = 12.84

preciosAntiarrugas+=10.00
console.log(preciosAntiarrugas)

console.log(precioCremaFacila==preciosAntiarrugas)
console.log(preciosAntiarrugas===precioCremaFacila)  // comparacion del valor y tipo de datos 

// 4. Casting ES6
console.log(+preciosAntiarrugas+ +precioCremaFacila)  // + hace la trasformacion de valores

// 5. Metodos 
console.log(nombreProducto.length);   // conteo de elementos 
console.log(nombreProducto.trim());    // Eliminar los espacios 
console.log(ID.includes('7'))          // si existe el paramero indicado 
console.log(nombreProducto.toUpperCase())  // hacer mayusculas 
console.log(nombreProducto.toLowerCase())  // hacer minuscula 

// 6. Condicionales -- Operaciones Ternarias 
const preciosGelLimpiador=33.36
const precioRetinol=57.35
let precioFinal=precioRetinol+preciosGelLimpiador
precioFinal >= 200.00 ? console.log("Debe pagar con tarjeta de credito"): console.log("Debe parga con efectivo en la caja");
// for 
let carritoFybeca=2
for (let i = 0; i < carritoFybeca; i++) {
    i<=0 ? console.log("Carrito vacio, por favor agregar al carrito Fybeca"):console.log(`Existe ${i} en el carrito`)
};
// while 
while (carritoFybeca>=0) {
    carritoFybeca<=0 ? console.log("Carrito vacio"):console.log("Carrito llenandose")
    carritoFybeca--
};


// 7. LOOPS - BUCLES 
const mascotas= ['CAT CHOW', 'PEDIGREE', 'NUTRAPRO', 'WHISKAS'];
mascotas.forEach((mascota)=>{console.log(mascota)})

const carritoMascota=mascotas.map((mascota)=> mascota.length)     // retorna un nuevo arreglo // se le ocupa para poner alguna operacion incluida 
console.log(carritoMascota)                 


// 8. Funcion Anonima y Autoejecutable
;(function(){
    console.log("La compra se finalizo, gracias por preferir Fybeca");
})()

  //Funcion declarada 
    function Fybeca(){
        console.log('Fybeca, siempre preocupandose por tu salud')}
    Fybeca();
  //Funcion expresada 
    const Cajera=function(){
        console.log('Ingresa la cantidad a pagar')
    }
    Cajera()

// 9. Argumentos 
const Factura=function(nombre, cedula){
    console.log(`Gracias por su compra Sr/a ${nombre}, N° cedula ${cedula}`)
}
Factura("Walter Cobacango", 1729195444)
    // Argumentos Opcionales
    const FacturaOpcional=function(nombre, cedula=999999999){
        console.log(`Gracias por su compra Sr/a ${nombre}, N° cedula ${cedula}`)
    }
    FacturaOpcional("Walter Cobacango")

// 10. Funcion Flecha 
const ProductoFybeca = (producto) => console.log(`Se a añadido el producto ${producto} al carrito de compras`)
ProductoFybeca("Hidraplus");

// 11. Parametro Rest
    const precioFinalItemsFybeca = function(a,b,...args){      /// ... seguidos por una palabra clave asume todos los parametros a colocar
        let suma = 0;
        let total = suma+a+b
        if(args.length>0) args.forEach(i =>total+=i)
        return total
    }
    console.log(precioFinalItemsFybeca(10.34,20.12,40.20,50,10))

// 12. Objetos
const Bazar_Hogar={
    nameToy:"Peluche glow",
    priceToy:13.72,
    offToy:true
}
console.log(Bazar_Hogar.nameToy)
console.log(Bazar_Hogar.priceToy)
console.log(Bazar_Hogar.offToy)

// 13. Deconstruccion
const {nameToy, priceToy, offToy:Descuento}=Bazar_Hogar
console.log(Descuento)
    // Propiedades
    Bazar_Hogar.carrito="no añadido"     // Añadir elementos Json
    console.log(Bazar_Hogar)

    delete Bazar_Hogar.carrito   // eliminar un elemento del JSON
    console.log(Bazar_Hogar)

Object.values(Bazar_Hogar).includes("") ? console.log("Existen espacios innecesarios"): console.log("OK")

const Bazar_Hogar1={
    namePlant: "Maceta Glow Rosado",
    pricePlant:9.99,
    offPlant:false
}

const CategoriaBazar = {...Bazar_Hogar,...Bazar_Hogar1}
console.log(CategoriaBazar)

