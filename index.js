const express = require('express');
const app = express();
const port = 3000


var data = require('./data/test.json');
app.set('view engine', 'ejs');


//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'Our Home Page'
  res.render('pages/index', {title:title});
});

app.get('/home', (req, res) => {
  var title = 'Our Home Page'
  res.render('pages/home', {title:title});
});


//about us
app.get('/about-us', (req, res) => {
  var title = 'Our About Us Page'
  res.render('pages/about-us', {title:title});
});


//add users route
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});



		app.get('/halo1', (req, res) => {
		  var title = 'Halo Combat Evolved'
		  res.render('pages/halo', {title:title});
		});
		
		app.get('/halo2', (req, res) => {
		  var title = 'Halo 2'
		  res.render('pages/halo2', {title:title});
		});
		
		app.get('/halo3', (req, res) => {
		  var title = 'Halo 3'
		  res.render('pages/halo3', {title:title});
		});
		
		app.get('/halo4', (req, res) => {
		  var title = 'Halo 4'
		  res.render('pages/halo4', {title:title});
		});



app.listen(port, () => {
  console.log('Example app listening on port ${port}');
	console.log(data);
});