const React = require("react");
const ReactRouter = require("react-router");

const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

const ApplicationContainer = require("./container/application");
const HomeContainer = require("./container/home");
const ProjectContainer = require("./container/project");

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