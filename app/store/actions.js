/**
 * Created by tomvankruijsbergen on 10/09/16.
 */

const keyMirror = require("key-mirror");

const names = keyMirror({
    URL_CHANGE: null,
});

const make = {
    [names.URL_CHANGE]: (currentPath) => {
        return {
            type: names.URL_CHANGE,
            currentPath: currentPath
        }
    }
};

module.exports = {
    make: make,
    names: names
};