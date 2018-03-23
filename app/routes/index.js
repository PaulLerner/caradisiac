const express        = require('express');
const app            = express();
module.exports = function(app, db) {
    app.get('/cars', (req, res) => {
    var search = require('./search.js');
    search.Query();
    res.send('<p>Querying elasticsearch, check your console !<p/><br/><a href="http://localhost:9292/">Home</a> ');
    });
    app.get('/populate', (req, res) => {
        /*var create = require('./create.js');
        create.Create();*/
        var populate = require('./populate.js');
        populate.Populate();
        res.send('<p>Indexing files to elasticsearch, check your console !<p/><br/><a href="http://localhost:9292/cars">Cars list</a> ');
      });
    app.get('/', (req, res) => {
        res.send('<h1>Home Page<h1/><br/><a href="http://localhost:9292/populate">Populate (index records to elasticsearch)</a> <br/><a href="http://localhost:9292/cars">Cars list</a> ');
      });
};
