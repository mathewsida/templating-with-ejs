const express = require('express');
const app = express();
const port = 3000;

app.set('view enine','ejs');



app.get('/', (req, res) => {
  var title = 'Our Home Page';
	res.render('index', {title:title});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});