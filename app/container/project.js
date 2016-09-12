/**
 * Created by tomvankruijsbergen on 05/09/16.
 */

const React = require("react");

const ReactRedux = require('react-redux');

const StoreNotifyingLink = require("../component/StoreNotifyingLink");

const ProjectContainer = (props, context) => {
    return (
        <div className="container-root">
            <div className="topbar-container">
                <div className="topbar">
                    <h3 className="topbar-title">Tom van Kruijsbergen</h3>

                    <StoreNotifyingLink to="/" className="topbar-back" onClick={(event) => {
                        if (props.previousPath === "/") {
                            context.router.goBack();
                            event.preventDefault();
                        }
                    }}>
                        <div className="topbar-back-image">
                            <img type="image/svg" src="/images/arrow-left-white.svg"/>
                        </div>
                        <div className="topbar-back-text">Back</div>
                    </StoreNotifyingLink>

                </div>
            </div>

            {props.children}
        </div>
    )
};
ProjectContainer.contextTypes = {
    router: React.PropTypes.object
};

const ConnectedProjectContainer = ReactRedux.connect(
    (state, ownProps) => {
        return {
            previousPath: state.previousPath
        }
    },
    (dispatch, ownProps) => {
        return {}
    }
)(ProjectContainer);
module.exports = ConnectedProjectContainer;