// create web server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = [
    {name: 'yujin', comment: 'Hello World!'}
];

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments', function(req, res) {
    res.send(comments);
});

app.post('/comments', function(req, res) {
    var newComment = req.body;
    comments.push(newComment);
    res.send(comments);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});