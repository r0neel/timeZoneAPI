const app = require('./app');
const port= 3000;
const router = require('router')

function startServer(){
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    })
}

startServer();
