/**
 * Created by tomvankruijsbergen on 06/09/16.
 */

const Redux = require("redux");

const reducer = (state, action) => {
    if (state === undefined) {
        return {};
    }
    return state;
};

const store = Redux.createStore(reducer);

store.subscribe(() =>
    console.log(store.getState())
);

module.exports = store;
