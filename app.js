const express = require('express');
const path = require('path');
var favicon = require('serve-favicon');
var compression = require('compression');
const app = express();

//compression
app.use(compression());

//favicon
app.use(favicon(path.join(__dirname, 'build','favicon.ico')));

//contenu statique
app.use("/static", express.static(path.join(__dirname, '/build/static')));

//envoyer "index.html" à toutes les pages demandées
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//port
app.listen(3000);