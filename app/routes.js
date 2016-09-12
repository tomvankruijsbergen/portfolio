const React = require("react");
const ReactRouter = require("react-router");

const store = require("./store/store");

// Here, programmatically add the routes from the store.
// var projects = store.getState().projects;

const AllRoutes = {
    childRoutes: [
        {
            path: '/',
            component: require("./container/application"),
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
                                },
                                {
                                    path: "twibfy",
                                    component: require("./container/projects/twibfy"),
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