/**
 * Created by tomvankruijsbergen on 31/08/16.
 */

// https://babeljs.io/docs/usage/require/
require('babel-core/register')({
    presets: ['react']
});

var express = require("express");
var Mustache = require("mustache");
var fs = require("fs");

var React = require("react");
var ReactDOMServer = require("react-dom/server");

var Main = require("./app/main");

var app = express();

app.set('views', __dirname + "/html");
app.engine('mustache', function (filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(new Error(err));

        var rendered = Mustache.render(content.toString(), options.view, options.partials);

        return callback(null, rendered)
    })
});
app.set('view engine', 'mustache');


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

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});