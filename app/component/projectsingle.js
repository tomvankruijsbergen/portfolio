/**
 * Created by tomvankruijsbergen on 10/09/16.
 */

const React = require("react");
const ReactRouter = require("react-router");

const Link = ReactRouter.Link;

const ProjectSingleComponent = (props) => {
    return (
        <Link to={props.url} className="projects-single-container">
            <div className="projects-single-image-container">
                <img className="projects-single-image-over" src={props.imageOver}/>
                <img className="projects-single-image" src={props.image}/>
            </div>
            <div className="projects-single-text-container">
                <h3>{props.title}</h3>
                <p className="projects-single-text">{props.text}</p>
            </div>
        </Link>
    )
};

ProjectSingleComponent.propTypes = {
    url: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,

    image: React.PropTypes.string.isRequired,
    imageOver: React.PropTypes.string.isRequired,
};

module.exports = ProjectSingleComponent;