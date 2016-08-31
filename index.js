/**
 * Created by tomvankruijsbergen on 31/08/16.
 */

// https://babeljs.io/docs/usage/require/
require('babel-core/register')({
    presets: ['react']
});

var express = require("express");
var Mustache = require("mustache");

var ReactDOMServer = require("react-dom/server");
var Main = require("./app/main");


var app = express();

/*
 Boilerplate for setting up Mustache as the engine, defining where all the .mustache files are, and assigning it to Express
 */
app.set('views', __dirname + "/html");
app.engine('mustache', function (filePath, options, callback) {
    var fs = require("fs");
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(new Error(err));

        var rendered = Mustache.render(content.toString(), options.view, options.partials);

        return callback(null, rendered)
    })
});
app.set('view engine', 'mustache');

app.use(express.static(__dirname + '/public'));


// Routes
app.get('/', (req, res) => {
    res.render(
        "index",
        {
            view: {
                react: ReactDOMServer.renderToString(Main())
            }
        }
    );
});

// Actually start Express
app.listen(3000, () => {
    console.log('Listening on port 3000');
});