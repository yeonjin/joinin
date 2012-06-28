var joinRender = require('../source/renderer/render_test');
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.form = function(req, res){
  res.render('join-form', {title: 'Express' });
};

exports.join = function(req, res){
  joinRender.goJoinResult(req, res);
};

exports.restTest = function(req, res)
{
    var id = req.params.id;
    req.body = ' {"id" : ' + id + '} ';
    res.send(req.body);    
};

exports.auth = function(req, res)
{
	
    //console.log('test');
    console.log(req.query.userId);
    console.log(req.params['userId']);
    console.log(req.body['userId']);
    console.log(req.body.userId);
	
    res.send('testtest');

};

exports.meetings = function(req, res)
{
  //var reqbody = req.body; 
  //console.log(req.body);
  //console.log(reqbody.userId);
  
  //var reqbody;
	
  req.on('data', function(chunk) {
	  //var reqbody = chunk;
      console.log("Body chunk: " + chunk);
      
      var reqbody = JSON.parse(chunk);
      console.log(reqbody.userId);
     
      var dynode = require('dynode');
      dynode.auth({https:true, accessKeyId: "AKIAIOJILF4MBA66PNSQ", secretAccessKey: "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"});
      
      
      dynode.scan("Meeting", function (err, body){
    	  res.send(body);
      });
  });
  
  
  
  //res.send('test');
  
  /*
  dynode.listTables(function (err, body){
	  res.send(body);
  });
  */ 
  
  //console.log('aaa');
  //dynode.listTables({Limit: 3, ExclusiveStartTableName: "Meetings"}, console.log);
  //console.log('test end');
  //var opts = {read: 5, write: 5, hash: {name: String}, range: {age: Number}};
  //dynode.createTable("ExampleTable", opts, console.log);
  //res.send('test');
};
