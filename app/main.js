/**
 * Created by tomvankruijsbergen on 31/08/16.
 */

var React = require("react");

var Main = (props) => {
    return (
        <div className="content-react">
            <div className="leaderboard-container">
                <div className="leaderboard">
                    <h1 className="leaderboard-title">Tom van Kruijsbergen</h1>
                    <p className="leaderboard-text">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    </p>
                </div>
            </div>
            <div className="aboutme-container">
                <div className="aboutme">
                    <h2 className="aboutme-title">About me</h2>
                    <p className="aboutme-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
            </div>
            <div className="projects-container">
                <div className="projects-container-line"></div>
                <h2 className="projects-title">Projects</h2>
                <div className="projects-container-inner">
                    <div className="projects-single-container" style={{backgroundColor:"#eee"}}>
                        <p className="projects-single">Hoiii</p>
                    </div>
                    <div className="projects-single-container" style={{backgroundColor:"#ddd"}}>
                        <p className="projects-single">Hoiii 2</p>
                    </div>
                    <div className="projects-single-container" style={{backgroundColor:"#ccc"}}>
                        <p className="projects-single">Hoiii 3</p>
                    </div>
                    <div className="projects-single-container" style={{backgroundColor:"#bbb"}}>
                        <p className="projects-single">Hoiii 4</p>
                    </div>
                </div>
            </div>
            <p>Eronder</p>
        </div>
    )
};
module.exports = Main;