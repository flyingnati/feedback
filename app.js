var express = require('express');
var app = express();
app.use(express.static('Flat-UI-master'));
app.listen(8080);