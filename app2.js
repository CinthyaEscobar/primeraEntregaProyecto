let productos = [{ id: 1, nombre: 'Delineador', marca: 'Maybelline', precio: 3000 },
{ id: 2, nombre: 'Base de maquillaje', marca: 'Loreal', precio: 6000 },
{ id: 3, nombre: 'Paleta de sombras', marca: 'NYX', precio: 10500 },
{ id: 4, nombre: 'Serum Acido Hialuronico', marca: 'Loreal', precio: 12000 }]

let carrito = []

let nombreUser = prompt('Por favor ingrese su nombre')
function saludar() {
    alert(`Bienvenida/o ${nombreUser} a la tienda Eivon!\n El día de hoy los productos sobre $10.000 están con descuentos `)
}
saludar()
agregarProducto()


function agregarProducto() {

    producto = prompt('Cual producto desea comprar?\n 1: Delineador \n 2:Base de Maquillaje \n 3: Paleta de Sombras \n 4:Serum Acido Hialuronico');
    switch (producto) {
        case '1':
            seleccionado = productos[0].nombre;
            marca = productos[0].marca;
            valor = productos[0].precio;
            alert(`Has seleccionado ${seleccionado},Marca: ${marca} Valor: $${valor}`)
            carrito.push(productos[0]);
            break;
        case '2':
            seleccionado = productos[1].nombre;
            marca = productos[1].marca;
            valor = productos[1].precio;
            alert(`Has seleccionado ${seleccionado},Marca: ${marca} Valor: $${valor}`)
            carrito.push(productos[1]);
            break;
        case '3':
            seleccionado = productos[2].nombre;
            marca = productos[2].marca;
            valor = productos[2].precio;
            alert(`Has seleccionado ${seleccionado}, Marca: ${marca} Valor: $${valor}`)
            carrito.push(productos[2]);
            break;
        case '4':
            seleccionado = productos[3].nombre;
            marca = productos[3].marca;
            valor = productos[3].precio;
            alert(`Has seleccionado ${seleccionado}, Marca: ${marca} Valor: $${valor}`)
            carrito.push(productos[3]);
            break;
        default:
            alert('Opcion no válida')
    }
    opcion = prompt('Que desea realizar? \n 1:Añadir otro producto \n 2: Ver productos con ofertas \n 3:Mostrar carrito \n 4: Salir')

}

while (opcion !== '4') {
    if (opcion === '1') {
        agregarProducto()
    }
    if (opcion == '2') {
        mostrarOfertas()
    }
    if (opcion === '3') {
        mostrarCarrito()
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
        alert(`Los productos con 10% de descuento de hoy: ${oferta.nombre}, Precio: ${oferta.precio}`)
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
