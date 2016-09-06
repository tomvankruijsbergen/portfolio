/**
 * Created by tomvankruijsbergen on 05/09/16.
 */

const React = require("react");

const ReactRouter = require("react-router");
const Link = ReactRouter.Link;

const ReactRedux = require('react-redux');

const ProjectContainer = (props) => {
    return (
        <div className="container-root">
            <div className="topbar-container">
                <div className="topbar">
                    <h3 className="topbar-title">Tom van Kruijsbergen</h3>
                    <Link to="/" className="topbar-back">
                        <div className="topbar-back-image">
                            <img type="image/svg" src="images/arrow-left-white.svg"/>
                        </div>
                        <div className="topbar-back-text">Back</div>
                    </Link>
                </div>
            </div>
            <div className="container-topbar-offset">
                <div className="widescreen-image">
                    <div className="widescreen-image-image-container">
                        <img className="widescreen-image-image" src="images/test1.jpg"/>
                    </div>
                    <div className="widescreen-image-text-container">
                        <h1 className="widescreen-image-text">Kik Chatbot</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};
const ConnectedProjectContainer = ReactRedux.connect(
    (state, ownProps) => {
        return {}
    },
    (dispatch, ownProps) => {
        return {}
    }
)(ProjectContainer);
module.exports = ConnectedProjectContainer;