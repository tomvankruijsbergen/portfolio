/**
 * Created by tomvankruijsbergen on 31/08/16.
 */

var React = require("react");

var ApplicationContainer = (props) => {
    return (
        <div className="content-react">
            {props.children}
        </div>
    )
};

module.exports = ApplicationContainer;