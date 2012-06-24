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

exports.meetings = function(req, res)
{
  var dynode = require('dynode');
  dynode.auth({https:true, accessKeyId: "AKIAIOJILF4MBA66PNSQ", secretAccessKey: "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"});
  dynode.listTables(console.log);
  //dynode.listTables({Limit: 3, ExclusiveStartTableName: "Meetings"}, console.log);
  console.log('test end');
  //var opts = {read: 5, write: 5, hash: {name: String}, range: {age: Number}};
  //dynode.createTable("ExampleTable", opts, console.log);
  res.send('test');
}
