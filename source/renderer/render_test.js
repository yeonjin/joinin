
var testRender = module.exports = {
    goJoinResult: function(req, res) {
      console.log('goJoinResult');
      res.render('join-result', {
        username: req.body.name + '222'
          , useremail: req.body.email
          , title: 'Express1'
      });
    }
};

/*
var tableLists = module.exports = {
	send: function(req, res) {
		
	}
};*/