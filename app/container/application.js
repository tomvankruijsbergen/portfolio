/**
 * Created by tomvankruijsbergen on 31/08/16.
 */

const React = require("react");

const ApplicationContainer = (props, context) => {
    return (
        <div className="content-react">
            {props.children}
        </div>
    )
};

ApplicationContainer.contextTypes = {
    router: React.PropTypes.object
};

module.exports = ApplicationContainer;