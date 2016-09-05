var React = require("react");
var ReactRouter = require("react-router");

var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var ApplicationContainer = require("./container/application");
var HomeContainer = require("./container/home");
var ProjectContainer = require("./container/project");

// Here, programmatically add the routes from the store.
var ProjectRoutes = [
    <Route key="project" path="project" component={ProjectContainer}/>
];

var Routes = (
    <Route path="/" component={ApplicationContainer}>
        <IndexRoute key="index" component={HomeContainer}/>
        {ProjectRoutes}
    </Route>
);
module.exports = Routes;