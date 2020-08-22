const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static( __dirname + '/public'));

//EXPRESS HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine','hbs');

app.get('/',  (req, res) =>{
  //res.send('Hola Mundo')


res.render('home',{
  nombre:'Carlos'
});

});
app.get('/about',  (req, res) =>{
  //res.send('Hola Mundo')


res.render('about');

});
app.listen(port,()=>{
  console.log(`Escuchando en el puerto ${ port }`);
}
);
