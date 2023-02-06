const socket = io();
let user;
let chatBox = document.getElementById('chatBox');

/* const input = document.getElementById('chatBox')
document.querySelector('button').addEventListener('click', () => {
    socket.emit('message', input.value)
}) */

/* socket.on('messages', data => {
    document.querySelector('p').innerText = data;
}) */


Swal.fire({
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
}).then(user => socket.emit('newUserLoged', { user }));

chatBox.addEventListener('keyup', evt => {
    if (evt.key === "Enter") {
        if (chatBox.value.trim().length > 0) {
            socket.emit("message", { user: user, message: chatBox.value })
            chatBox.value = "";
        }
    }
})

socket.on('messages', data => {
    console.log(data)
    let log = document.getElementById('messageLogs')
    let messages = "";
    data.forEach(msg => {
        messages = messages + `${msg.user} dice ${msg.message} </br>`
    });
    log.innerHTML = messages
})

socket.on('newUser', user => {
    Swal.fire({
        text: `${user.user} se conecto`,
        toast : true ,
        position: "top-right"

    })
})
