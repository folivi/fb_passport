exports.login = function(req, res){
	res.render('facebook_login', {title: 'Load from facebook'})
}

exports.callback = function(req, res){
	res.redirect('/');
}