/**
 * Created by tomvankruijsbergen on 31/08/16.
 */

/*
 * This is the entry point for the server.
 */

process.env.NODE_ENV = 'production';

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


/*
 * Now render the route. Because react router already routes, we'll send that all the routes.
 */
var React = require("react");
var ReactDOMServer = require("react-dom/server");

var ReactRouter = require("react-router");
var match = ReactRouter.match;
var RouterContext = ReactRouter.RouterContext;

var Routes = require("./app/routes");

app.use( (req, res, next) => {
    match({ routes: Routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var reactString = ReactDOMServer.renderToString(React.createElement(RouterContext, renderProps));
            res.status(200).render(
                "index",
                {
                    view: {
                        react: reactString
                    }
                }
            );
        } else {
            res.status(404).send('Not found')
        }
    });
});


// Actually start Express.
// Todo: read the port number from some same config file.
app.listen(3000, () => {
    console.log('Listening on port 3000');
});