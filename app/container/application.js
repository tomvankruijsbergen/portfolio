/**
 * Created by tomvankruijsbergen on 31/08/16.
 */

const React = require("react");

const ApplicationContainer = (props) => {
    return (
        <div className="content-react">
            {props.children}
        </div>
    )
};

module.exports = ApplicationContainer;