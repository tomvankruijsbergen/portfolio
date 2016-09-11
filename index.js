/**
 * Created by tomvankruijsbergen on 31/08/16.
 */

/*
 * This is the entry point for the server.
 */

// process.env.NODE_ENV = 'production';

// https://babeljs.io/docs/usage/require/
// Todo: for a production server, this should be pre-compiled.
require('babel-core/register')({
    presets: ['react']
});

const express = require("express");
const Mustache = require("mustache");

const app = express();

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
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const ReactRouter = require("react-router");
const RouterContext = ReactRouter.RouterContext;

const Routes = require("./app/routes");


const ReactRedux = require("react-redux");
const Provider = ReactRedux.Provider;

const store = require("./app/store/store");


app.use( (req, res, next) => {
    ReactRouter.match({ routes: Routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var reactString = ReactDOMServer.renderToString(

                /*
                 * This is not JSX syntax because we'll have to compile this file with babel too,
                 * and we'll do that in the future.
                 */
                React.createElement(Provider, {store:store},
                    React.createElement(RouterContext, renderProps)
                )
            );
            res.status(200).render(
                "index", // The name of the mustache file.
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