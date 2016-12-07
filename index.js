var express = require('express');
var app = express();
const path = require('path');

var port = process.env.PORT || 8080;
app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/test', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});