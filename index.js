/**
 * Created by tomvankruijsbergen on 31/08/16.
 */

/*
 * This is the entry point for the server.
 */

// https://babeljs.io/docs/usage/require/
// Todo: for a production server, this should be pre-compiled.
require('babel-core/register')({
    presets: ['react']
});

var express = require("express");
var Mustache = require("mustache");

var app = express();


/*
 * Boilerplate for setting up Mustache as the engine, defining where all the .mustache files are, and assigning it to Express
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

/*
 * Makes the public folder accessible to mustache files as if we were in that folder. This is so we can load
 * This is so we can easily access other static files, like images, stylesheets and scripts.
 */
app.use(express.static(__dirname + '/public'));


// Route. Main is the component that we'll be pre-rendering.
var ReactDOMServer = require("react-dom/server");
var Main = require("./app/main");

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


// Actually start Express.
// Todo: read the port number from some same config file.
app.listen(3000, () => {
    console.log('Listening on port 3000');
});