Para comenzar:

npm install express express-handlebars socket.io

configurar nuestro websocket, carpeta public, etc

configurar nuestro servidor express con handlebars + socket.io : index.handlebars
siempre colocar primero el scrip del socket antes que el nuestro:
****    <script src="/socket.io/socket.io.js"></script>    ****
****    <script src="/js/index.js"></script>               ****
