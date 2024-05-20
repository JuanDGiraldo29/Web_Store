// PRODUCTOS
const productos = [
    //Cripton Li
    {
        id:"cripton-01",
        titulo: "cripton 01",
        imagen: "./img/crypton 1.png",
        categoria: {
            nombre:"cripton",
            id: "cripton"
        },
        precio: 69255
    },
    {
        id:"cripton-02",
        titulo: "cripton 02",
        imagen: "./img/crypton 1.png",
        categoria: {
            nombre:"cripton",
            id: "cripton"
        },
        precio: 69255
    },
    {
        id:"cripton-03",
        titulo: "cripton 03",
        imagen: "./img/crypton 1.png",
        categoria: {
            nombre:"cripton",
            id: "cripton"
        },
        precio: 69255
    },
    {
        id:"cripton-04",
        titulo: "cripton 04",
        imagen: "./img/crypton 1.png",
        categoria: {
            nombre:"cripton",
            id: "cripton"
        },
        precio: 69255
    },
    {
        id:"cripton-05",
        titulo: "cripton 05",
        imagen: "./img/crypton 2.png",
        categoria: {
            nombre:"cripton",
            id: "cripton"
        },
        precio: 50600
    },
    {
        id:"cripton-06",
        titulo: "cripton 06",
        imagen: "./img/crypton 2.png",
        categoria: {
            nombre:"cripton",
            id: "cripton"
        },
        precio: 50600
    },
    {
        id:"cripton-07",
        titulo: "cripton 07",
        imagen: "./img/crypton 2.png",
        categoria: {
            nombre:"cripton",
            id: "cripton"
        },
        precio: 50600
    },
    {
        id:"cripton-08",
        titulo: "cripton 08",
        imagen: "./img/crypton 2.png",
        categoria: {
            nombre:"cripton",
            id: "cripton"
        },
        precio: 50600
    },
    //N-max
    {
        id:"nmax-01",
        titulo: "nmax 01",
        imagen: "./img/nmax 3.png",
        categoria: {
            nombre:"nmax",
            id: "nmax"
        },
        precio: 69255
    },
    {
        id:"nmax-02",
        titulo: "nmax 02",
        imagen: "./img/nmax 3.png",
        categoria: {
            nombre:"nmax",
            id: "nmax"
        },
        precio: 69255
    },
    {
        id:"nmax-03",
        titulo: "nmax 03",
        imagen: "./img/nmax 3.png",
        categoria: {
            nombre:"nmax",
            id: "nmax"
        },
        precio: 69255
    },
    {
        id:"nmax-04",
        titulo: "nmax 04",
        imagen: "./img/nmax 3.png",
        categoria: {
            nombre:"nmax",
            id: "nmax"
        },
        precio: 69255
    },
    {
        id:"nmax-05",
        titulo: "nmax 05",
        imagen: "./img/nmax 4.png",
        categoria: {
            nombre:"nmax",
            id: "nmax"
        },
        precio: 30000
    },
    {
        id:"nmax-06",
        titulo: "nmax 06",
        imagen: "./img/nmax 4.png",
        categoria: {
            nombre:"nmax",
            id: "nmax"
        },
        precio: 30000
    },
    {
        id:"nmax-06",
        titulo: "nmax 06",
        imagen: "./img/nmax 4.png",
        categoria: {
            nombre:"nmax",
            id: "nmax"
        },
        precio: 30000
    },
    {
        id:"nmax-07",
        titulo: "nmax 07",
        imagen: "./img/nmax 4.png",
        categoria: {
            nombre:"nmax",
            id: "nmax"
        },
        precio: 30000
    },
     //FZ 25
    {
        id:"fz-01",
        titulo: "fz 01",
        imagen: "./img/fz 25 1.png",
        categoria: {
            nombre:"fz",
            id: "fz"
        },
        precio: 90000
    },
    {
        id:"fz-01",
        titulo: "fz 01",
        imagen: "./img/fz 25 1.png",
        categoria: {
            nombre:"fz",
            id: "fz"
        },
        precio: 90000
    },
    {
        id:"fz-01",
        titulo: "fz 01",
        imagen: "./img/fz 25 1.png",
        categoria: {
            nombre:"fz",
            id: "fz"
        },
        precio: 90000
    },
    {
        id:"fz-01",
        titulo: "fz 01",
        imagen: "./img/fz 25 1.png",
        categoria: {
            nombre:"fz",
            id: "fz"
        },
        precio: 90000
    },
    {
        id:"fz-05",
        titulo: "fz 05",
        imagen: "./img/f 25 2.png",
        categoria: {
            nombre:"fz",
            id: "fz"
        },
        precio: 65000
    },
    {
        id:"fz-06",
        titulo: "fz 06",
        imagen: "./img/f 25 2.png",
        categoria: {
            nombre:"fz",
            id: "fz"
        },
        precio: 65000
    },
    {
        id:"fz-07",
        titulo: "fz 07",
        imagen: "./img/f 25 2.png",
        categoria: {
            nombre:"fz",
            id: "fz"
        },
        precio: 65000
    },
    {
        id:"fz-08",
        titulo: "fz 08",
        imagen: "./img/f 25 2.png",
        categoria: {
            nombre:"fz",
            id: "fz"
        },
        precio: 65000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias=document.querySelectorAll(".boton-categoria");
const tituloPrincipal=document.querySelector("#titulo-principal");
let botonesAgregar= document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML="";
    
    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class=" producto-detalles">
                <h3 class="producto-titulo">"${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar"  id= "${producto.id}" id= "$">Agregar</button>
            </div> 
        `;
        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}
cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else {
            tituloPrincipal.innerText ="Todos los productos";
            cargarProductos(productos);
        }
    })
});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click",agregarAlCarrito);
    });
}
let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else{
    productosEnCarrito= [];
}


function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregados = productos.find(producto => producto.id === idBoton);
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;      
    }else{
        productoAgregados.cantidad = 1;
        productosEnCarrito.push(productoAgregados);
    }
    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}
function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad,0);
    numerito.innerText = nuevoNumerito;
}


