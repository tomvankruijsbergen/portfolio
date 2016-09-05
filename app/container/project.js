/**
 * Created by tomvankruijsbergen on 05/09/16.
 */

var React = require("react");

var TopBar = require("../view/topbar");

var ProjectContainer = (props) => {
    return (
        <div className="project">
            <TopBar/>
        </div>
    )
};
module.exports = ProjectContainer;