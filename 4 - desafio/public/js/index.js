const socket = io();
const productsContainer = document.getElementById('realTimeCont')
const form = document.getElementById("formAddProduct");
let productos = [];

socket.on('todosLosProductosClientes', (todosProductos) => {
    console.log(todosProductos)
    productos = todosProductos;
    agregarProducto();
})

const agregarProducto = () => {
    const boxsProducto = productos.map(product => {
        const box = document.createElement('div')

        box.innerHTML =
                        `                        
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                        <p>Precio: $ ${product.price}</p>
                        <p>Stock: ${product.stock} Pares de calzado </p>
                        `
        return box
    })
    productsContainer.innerHTML = '';
    for (const box of boxsProducto) {
        productsContainer.appendChild(box);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    entregaForm();
});
const entregaForm = async () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const img = document.getElementById("img").value;
      
    await fetch("http://localhost:8080/api/products", {
        method: "post", 
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            description: description,
            price: price,
            thumbnails: img,
        }),
    });   
    //form.reset();
};




/* const express = require('express');
const handlebars = require('express-handlebars');
const {Server} = require('socket.io');
const server = express()


 */















/* 
let chatBox = document.getElementById('chatBox');

const input = document.getElementById('chatBox')
document.querySelector('button').addEventListener('click', () => {
    socket.emit('message', input.value)
}) */

/* socket.on('messages', data => {
    document.querySelector('p').innerText = data;
}) */


/* Swal.fire({
    title: 'identificarse...',
    input: 'text',
    text: 'ingresa un nombre',
    footer: 'el footer',
    inputValidator: (value) => {
        return !value && 'se necesita un usuario!'
    },
    allowOutsideClick: false

}).then(result => {
    user = result.value
    return user;
}).then(user => socket.emit('newUserLoged', { user })); */

/* chatBox.addEventListener('keyup', evt => {
    if (evt.key === "Enter") {
        if (chatBox.value.trim().length > 0) {
            socket.emit("message", { user: user, message: chatBox.value })
            chatBox.value = "";
        }
    }
}) */

/* socket.on('messages', data => {
    console.log(data)
    let log = document.getElementById('messageLogs')
    let messages = "";
    data.forEach(msg => {
        messages = messages + `${msg.user} dice: ${msg.message} </br>`
    });
    log.innerHTML = messages
}) */

/* socket.on('newUser', user => {
    Swal.fire({
        text: `${user.user} se conecto`,
        toast : true ,
        position: "top-right"

    })
}) */
