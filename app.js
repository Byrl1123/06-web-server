import colors from 'colors';
import express from 'express'
import hbs from 'hbs';
import {  } from 'dotenv/config';
/* se usa esta configuració porque estoy usando ES6
En caso de no usarlo, no hace falta la configuración extra
*/
import path, { dirname } from 'path';
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Fin de la configuración de importación de archivos y direcciones


const app = express();
const port = process.env.PORT;

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// servir contenido estatico
app.use( express.static('public') );






app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Bryant Revete',
        titulo: 'Curso de Node'
    });
});


// Middleware: funcion que se ejecuta antes que otra cosa


app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Bryant Revete',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Bryant Revete',
        titulo: 'Curso de Node'
    });
});


app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/backup/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`)
});

