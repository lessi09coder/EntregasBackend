const express = require('express');
const app = express();


const httpServer = app.listen(8080, () => {
    console.log(`Server running on port: ${httpServer.address().port}`)
});
httpServer.on('error', error => console.log(error));