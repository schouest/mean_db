var useclasses = require('./../server/controllers/useclasses.js');
var users = require('./../server/controllers/users.js');
var teams = require('./../server/controllers/teams.js');

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

    app.get('/getusers', function(req, res) {
      users.show(req, res);
    });

    app.post('/adduser', function(req, res) {
      users.add(req, res);
    });

    app.get('/getteams', function(req, res) {
      teams.show(req, res);
    });

    app.post('/addteam', function(req, res) {
      teams.add(req, res);
    });  

  });