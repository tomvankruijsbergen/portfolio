/**
 * Created by tomvankruijsbergen on 11/09/16.
 */

const React = require("react");

const KikChatbot = (props) => {
    return (
        <div className="project-root">
            <div className="widescreen-image">
                <div className="widescreen-image-image" style={{backgroundImage: "url('/images/test1.jpg')"}}></div>
            </div>

            <div className="intro-container">
                <h1 className="intro-title">Poki Publishing</h1>
                <p className="intro-stats">Web application (React, PHP)</p>

                <div className="intro-summary-container">
                    <p className="intro-summary">Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jÃ­cama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.</p>
                </div>
            </div>
        </div>
    )
};

module.exports = KikChatbot;