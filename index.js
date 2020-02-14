var express = require('express');
var port = process.env.PORT || 3000;
require('dotenv').config()

var app = express();

app.get('/', (req, res) => {
    res.send({ message: `Hello world ${process.env.test_environ}`});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
