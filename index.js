const app = require('./app');
const port= 3000;

function startServer(){
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    })
}

startServer();
