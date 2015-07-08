// have to require the controller
var useclasses = require('./../server/controllers/useclasses.js');
//var orders = require('./../server/controllers/orders.js');
//var products = require('./../server/controllers/products.js');

  // require this in the server.js file and pass it app
  module.exports = (function(app) {
    
    app.get('/getclasses', function(req, res) {
      useclasses.show(req, res);
    });

    app.post('/addclass', function(req, res) {
      useclasses.add(req, res);
    });

    app.get('/delete/:id', function(req, res) {
    	useclasses.remove(req, res);
    });  

  });