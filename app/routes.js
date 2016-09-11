const React = require("react");
const ReactRouter = require("react-router");

const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

const ApplicationContainer = require("./container/application");
// const HomeContainer = require("./container/home");
// const ProjectContainer = require("./container/project");

const store = require("./store/store");

// Here, programmatically add the routes from the store.
var projects = store.getState().projects;

/*
const ProjectRoutes = {
    childRoutes: [
        {
            path: 'kik-chatbot',
            //component: require("./container/projects/kikchatbot"),
            component: ProjectContainer,
        }
    ]
};
*/

/*
var ProjectRoutes = projects.map((item) => {
    return <Route key={item.url} path={item.url} component={ProjectContainer}/>
});
*/

const AllRoutes = {
    childRoutes: [
        {
            path: '/',
            component: ApplicationContainer,
            getIndexRoute: function(partialNextState, callback) {
                callback(null, {
                    component: require("./container/home"),
                })
            },
            getChildRoutes: function(partialNextState, callback) {
                callback(null, [
                    {
                        path: "projects",
                        component: require("./container/project"),
                        getChildRoutes: function(partialNextState, callback) {
                            callback(null, [
                                {
                                    path: "kik-chatbot",
                                    component: require("./container/projects/kikchatbot"),
                                }
                            ])
                        }
                    }
                ])
            }
        }
    ]
};
module.exports = AllRoutes;
/*
var Routes = (
        <Route path="/" component={ApplicationContainer}>
            <IndexRoute component={HomeContainer}/>
            <Route path={"projects"} component={ProjectContainer} routes={ProjectRoutes}/>
        </Route>
);
module.exports = Routes;
*/