
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , db
  , Document;

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.logger());
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  //db = mongoose.connect('mongodb://192.168.0.224/nodepad-development');
});

app.configure('production', function(){
  app.use(express.logger());
  app.use(express.errorHandler());
  //db = mongoose.connect('mongodb://192.168.0.224/nodepad-development');
});

app.configure('test', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  //db = mongoose.connect('mongodb://192.168.0.224/nodepad-test');
});

//app.Document = Document = require('./models.js').Document(db);

// Routes

app.get('/', routes.index);
app.get('/join', routes.form);
app.post('/join', routes.join);
app.get('/restTest/:id', routes.restTest);
app.get('/meetings', routes.meetings);
app.get('/documents.:format', function(req, res) {
  //var document = new Document(req.body['document']);
  //document.save(function() {
    switch (req.params.format) {
      case 'json':
        var doc = ' "test11" : {"aaa" : "1111"} ';
        res.send(doc);    
       break;
 
       default:
        //res.redirect('/documents');
        res.send("normal data~");
    }
  //});
});
app.listen(process.env.PORT, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
