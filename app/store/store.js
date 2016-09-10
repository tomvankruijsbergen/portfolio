/**
 * Created by tomvankruijsbergen on 06/09/16.
 */

const Redux = require("redux");

// For initial population. We could load this dynamically from a JSON file here.
const initialState = {
    previousPath: undefined,
    projects: [
        {
            id: 1,
            title: "Kik Chatbot",
            url: "/projects/kik-chatbot",
            preview: {
                image: "/images/test2_original.png",
                imageOver: "/images/test2.png",
                text: "A chat bot within Kik that makes jokes, talks about himself, and knows a lot of games."
            }
        },
        {
            id: 2,
            title: "Example project",
            url: "/projects",
            preview: {
                image: "/images/test2_original.png",
                imageOver: "/images/test2.png",
                text: "An example project. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion pea peanut soko zucchini."
            }
        }
    ]
};

// Temp code, to populate a bunch of projects quickly.
initialState.projects = [].concat(
    initialState.projects[0],
    [0,1,2,3,4,5,6].map((item) => {
        var fakeProject = initialState.projects[1];
        var result = Object.assign({}, fakeProject);
        result.id = fakeProject.id + item;
        result.url = fakeProject.url + "/" + item;
        return result;
    })
);

const Actions = require("./actions");

const reducer = (state, action) => {
    if (state === undefined) {
        return initialState;
    }

    var newState = JSON.parse(JSON.stringify(state));
    if (action.type === Actions.names.URL_CHANGE) {
        newState.previousPath = action.currentPath;
    }
    return newState;
};

const store = Redux.createStore(reducer);

store.subscribe(() => {
    //console.log(store.getState())
});

module.exports = store;
