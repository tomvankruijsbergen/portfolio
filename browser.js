/**
 * Created by tomvankruijsbergen on 31/08/16.
 */

/*
 * This is the entry point for the browser.
 * This file exists only as an entry point for browserify.
 *
 * The entire flow for the application: we first render the main page on the server-side,
 * then make React re-render as soon as it loads this JS code. That way, you can immediately see
 * some output, while the larger JS code loads in the background.
 *
 * Currently, we're calling the same component: app/Main. In the future, we could make a separate react starting
 * point, or route, that can render an even smaller or customised temporary page.
 */

// process.env.NODE_ENV = 'production';

var React = require("react");
var ReactDOM = require("react-dom");

var Main = require("./app/main");

ReactDOM.render(Main(), document.getElementById("content"));
