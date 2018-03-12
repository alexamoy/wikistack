'use strict';
var bodyParser = require('body-parser')
var nunjucks = require('nunjucks');
var express = require('express');
var fs = require('fs');
var postgres = require('pg');
var router = require('./routes');
var app = express();
const models = require('./models');

const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/', router);

models.db.sync({force: true})
.then(()=>{
    console.log('All tables created!'); 
    app.listen(3000, function(){
        console.log("I'm listening");
    })
})
.catch(console.error.bind(console)); 

// app.listen(3000, function(){
//     console.log("I'm listening");
// });