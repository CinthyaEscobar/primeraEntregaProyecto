let productos = [{ id: 1, nombre: 'Delineador', marca: 'Maybelline', precio: 3000 },
{ id: 2, nombre: 'Base de maquillaje', marca: 'Loreal', precio: 6000 },
{ id: 3, nombre: 'Paleta de sombras', marca: 'NYX', precio: 10500 },
{ id: 4, nombre: 'Serum Acido Hialuronico', marca: 'Loreal', precio: 12000 },
{ id: 5, nombre: 'Producto Nuevo', marca: 'Nuevo', precio: 15000 }]

let carrito = []


let nombre = ''
function saludar() {
    do {
        nombre = prompt("Hola, bienvenido a la tienda Eivon,por favor, debe ingresar su nombre para continuar con la compra")
    }
    while (nombre == '' || nombre == null)
    alert(`Bienvenida/o ${nombre} a la tienda Eivon!\n El día de hoy los productos sobre $10.000 están con descuentos `)
    console.log(nombre);
}

saludar()
mostrarProductos()


function mostrarProductos() {
    idProducto = Number(prompt(`Cual producto desea comprar?\n
    ${productos.map((producto, indice) => {
        return `\nProducto ${producto.id} : ${producto.nombre} - Precio : ${producto.precio} - Marca: ${producto.marca}\n`
    })}`));
    console.log(productos);
    let item = productos.find(m => m.id === idProducto)
    validarIngreso(item)
}

//funcion manda parametros para que luego en la sigueinte funcion se puedan utilizar en cascada

//validar que el producto exista, id válido
function validarIngreso(item) {
    if (item != undefined) {
        agregarProducto(item)
    } else {
        alert('Opción no valida. Vuelva a seleccionar un producto')
        mostrarProductos()
    }

}

function agregarProducto(item) {
    alert(`Has seleccionado: ${item.nombre}, Marca: ${item.marca}, Precio:${item.precio}`)
    carrito.push(item)
    opcion = prompt('Que desea realizar? \n 1:Añadir otro producto \n 2: Ver productos con ofertas \n 3:Mostrar carrito \n 4: Salir')

}


while (opcion !== '4') {
    if (opcion === '1') {
        mostrarProductos()
    }
    if (opcion == '2') {
        mostrarOfertas()
    }
    if (opcion === '3') {
        mostrarCarrito()
    }else{
        opcion = prompt('Que desea realizar? \n 1:Añadir otro producto \n 2: Ver productos con ofertas \n 3:Mostrar carrito \n 4: Salir')
    }
}


function mostrarCarrito() {
    carrito.forEach((producto) => {
        alert(`Productos en carrito: ${producto.nombre}, ${producto.marca}, ${producto.precio}`)
    })
    opcion = prompt('Que desea realizar? \n 1:Añadir otro producto \n 2: Ver productos con ofertas \n 3:Mostrar carrito \n 4: Salir')
}

function mostrarOfertas() {
    let ofertas = productos.filter((producto) => producto.precio > 10000);
    for (let oferta of ofertas) {
        alert(`Los productos con 10% de descuento de hoy: \n ${oferta.nombre}, Precio: ${oferta.precio}, Marca: ${oferta.marca}`)
    }
    opcion = prompt('Que desea realizar? \n 1:Añadir otro producto \n 2: Ver productos con ofertas \n 3:Mostrar carrito \n 4: Salir')
}


totalAPagar()
function totalAPagar() {
    const total = carrito.reduce((acc, el) => acc + el.precio, 0)
    alert(`El total de su compra es de:$ ${total}`)
}
pagarProducto()
function pagarProducto() {

    let pagar = 0

    do {
        pagar = Number(prompt(`Como desea pagar? \n 1: Débito \n 2: Efectivo \n 3: Cancelar compra y salir.`))
        switch (pagar) {
            case 1:
                alert('Su pago con tarjeta ha sido aceptado. Gracias por su compra')
                break
            case 2:
                alert('Su pago con dinero en efectivo sido aceptado.\n  Gracias por su compra')
                break
            case 3:
                alert('Se ha cancelado su compra')
                break
            default:
                alert('opcion no válida')
        }
    } while (pagar < 1 || pagar > 3)


} 
