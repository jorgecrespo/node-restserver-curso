require('./config/config');


const mongoose = require('mongoose');
const express = require('express')
const path = require('path');
const app = express()


const bodyparser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))


// parse application/json
app.use(bodyparser.json())


//habilitar la carpeta public para que se acceda desde cualquier lugar

app.use(express.static(path.resolve(__dirname, '../public')));



//Configuracion global de rutas
app.use(require('./routes/index'))


mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE')
});


mongoose.set('useCreateIndex', true);

app.listen(process.env.PORT, () => {
    console.log("Escuchando el puerto ", process.env.PORT)
})