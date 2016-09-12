/**
 * Created by tomvankruijsbergen on 06/09/16.
 */

const Redux = require("redux");

// For initial population. We could load this dynamically from a JSON file here.
const initialState = {
    previousPath: undefined,
    projects: [
        {
            title: "Kik Chatbot",
            url: "/projects/kik-chatbot",
            preview: {
                image: "/images/test2.png",
                imageOver: "/images/test2_original.png",
                text: "A chat bot within Kik that makes jokes, talks about himself, and knows a lot of games."
            }
        },
        {
            title: "Twibfy",
            url: "/projects/twibfy",
            preview: {
                image: "/images/twibfy/preview_mono.png",
                imageOver: "/images/twibfy/preview_color.png",
                text: "An inspirational platform and marketplace for creative professionals."
            }
        }
    ]
};

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
