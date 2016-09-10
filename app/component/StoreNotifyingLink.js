/**
 * Created by tomvankruijsbergen on 10/09/16.
 */

/*
 * This component exists because React Router has no built-in way of knowing what the history is.
 * Therefore, we wrap all the in-project links into this one, so that this one can take care of
 * notifying the store before going to the new link.
 *
 * Todo: this does not catch manual previous/next actions, and should probably be somewhere else.
 * Where can this be? Perhaps a catch-all store dispatcher in the root react object?
 */
const React = require("react");
const ReactRouter = require("react-router");
const Link = ReactRouter.Link;

const store = require("../store/store");
const actions = require("../store/actions");

const StoreNotifyingLink = (props, context) => {
    var restProps = Object.assign({}, props);
    delete restProps.children;
    delete restProps.to;
    delete restProps.onClick;

    return (
        <Link to={props.to} onClick={(event) => {
            if (props.onClick) {
                props.onClick(event);
            }
            store.dispatch(actions.make[actions.names.URL_CHANGE](window.location.pathname));
        }} {...restProps}>
            {props.children}
        </Link>
    )
};

StoreNotifyingLink.propTypes = {
    to: React.PropTypes.string.isRequired,
};

module.exports = StoreNotifyingLink;