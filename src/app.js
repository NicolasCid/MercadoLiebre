const express = require('express');
const app = express();
const path = require('path');

//Definir un puerto
app.set('port',process.env.PORT ||3050)
//Definir un observador del puerto definido

app.listen(app.get('port'), () => console.log("Listening on port:3050"));

//Definir las rutas de mi servidor
app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'./views/home.html')));

app.use(express.static(path.resolve(__dirname, '../public')));