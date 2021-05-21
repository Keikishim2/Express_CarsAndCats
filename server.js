// Load the express module and store it in the variable express (Where do you think this comes from?)
let express = require('express');

// invoke express and store the result in the variable app
let app = express();

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/cats', function (request, response){
    response.render('cats');
})
app.get('/cars', function (request, response){
    response.render('cars');
})
app.get('/form', function (request, response){
    response.render('cats');
})


// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
    console.log("listening on port 8000");
})