var React = require("react");
var ReactRouter = require("react-router");

var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var ApplicationContainer = require("./container/application");
var HomeContainer = require("./container/home");

var Routes = (
    <Route path="/" component={ApplicationContainer}>
        <IndexRoute component={HomeContainer}/>
    </Route>
);
module.exports = Routes;