/**
 * Created by tomvankruijsbergen on 12/09/16.
 */

const React = require("react");

/*
 * Todo: make into components:
 * - Main image
 * - Title and subtitle
 *
 * - Generic text field
 * - Generic text field with title
 * - Images side by side (this could be a class as well)
 */

const Twibfy = (props) => {
    return (
        <div className="project-root">
            <div className="widescreen-image">
                <div className="widescreen-image-image" style={{backgroundImage: "url('/images/twibfy/background.jpg')"}}></div>
            </div>

            <div className="intro-container">
                <h1 className="intro-title">Twibfy</h1>
                <p className="intro-stats">iOS app</p>

                <div className="intro-summary-container">
                    <p className="intro-summary">Twibfy is a platform where people can discover, organise, and share interesting visual content. New images and videos can be submitted by anyone, but each image has to be approved by staff before it becomes searchable. There is a website and a native iOS app.</p>
                </div>
            </div>

            <div className="side-by-side-images">
                <img className="side-by-side-images-image" src="/images/twibfy/1.jpg"/>
                <div className="side-by-side-images-separator"/>
                <img className="side-by-side-images-image" src="/images/twibfy/2.jpg"/>
            </div>

            <div className="simple-text-container">
                <div className="simple-text">
                    <p>I took over the development of the iOS app, and then added and optimised a lot of new features over the course of several months. I set up an API in PHP for the app to communicate with the database.</p>
                    <p className="element-margin-top-half">Download Twibfy on your favourite iOS device here or go to <a target="_blank" href="https://twibfy.com">twibfy.com</a>.</p>
                    <p className="element-margin-top-half">A case video, made by <a target="blank" href="http://www.tygdigital.com">tygdigital</a>.</p>
                </div>
            </div>

            <div className="simple-text-container">
                <div className="simple-text">
                    <iframe src="http://player.vimeo.com/video/86000966" width="100%" height="400" frameBorder="0" allowFullScreen={true}></iframe>
                </div>
            </div>

            <div className="bottom"></div>
        </div>
    )
};

module.exports = Twibfy;