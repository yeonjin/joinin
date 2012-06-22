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
