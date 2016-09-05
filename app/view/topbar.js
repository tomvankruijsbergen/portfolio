/**
 * Created by tomvankruijsbergen on 05/09/16.
 */

var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var TopBar = (props) => {
    return (
        <div className="topbar-container">
            <div className="topbar">
                <h3 className="topbar-title">Tom van Kruijsbergen</h3>
                <Link to="/" className="topbar-back">
                    <img type="image/svg" className="topbar-back-image" src="images/arrow-left-white.svg"/>
                    <div className="topbar-back-text">Back</div>
                </Link>
            </div>
        </div>
    )
};
module.exports = TopBar;