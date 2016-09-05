/**
 * Created by tomvankruijsbergen on 05/09/16.
 */

var React = require("react");

var MainContainer = (props) => {
    return (
        <div className="container">
            <div className="leaderboard-container">
                <div className="leaderboard">
                    <h1 className="leaderboard-title">Tom van Kruijsbergen</h1>
                    <p className="leaderboard-text">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    </p>
                    <div className="button-primary">
                        See projects
                    </div>
                </div>
            </div>
            <div className="aboutme-container">
                <div className="aboutme">
                    <h2 className="aboutme-title">About me</h2>
                    <p className="aboutme-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <p className="aboutme-text element-margin-top-half">Praesent mattis porttitor felis eu efficitur. Proin pulvinar dictum quam, nec viverra ipsum euismod sit amet. Vestibulum a dolor odio. Proin venenatis venenatis nulla. Sed ultricies pretium diam ac lobortis. Sed sed dolor pharetra, finibus est id, auctor dui. Praesent rutrum erat id enim interdum, id aliquet massa interdum.</p>
                </div>
            </div>
            <div className="color-line"></div>
            <div className="projects-container">
                <h2 className="projects-title">Projects</h2>
                <div className="projects-container-inner">
                    <div className="projects-single-container">
                        <div className="projects-single-container-inner">
                            <div className="projects-single">
                                <h3>Project 1</h3>
                                <p className="projects-single-text">Nam ullamcorper aliquet magna, interdum lacinia tellus scelerisque et. Cras vel ligula ac mi molestie bibendum. Fusce nec accumsan dolor. Proin vitae tellus rutrum, gravida est feugiat, venenatis velit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-single-container">
                        <div className="projects-single-container-inner">
                            <div className="projects-single">
                                <h3>Project 2</h3>
                                <p className="projects-single-text">Quisque feugiat, justo posuere egestas aliquet, neque eros ornare dui, sit amet ultrices mauris neque at ligula. Curabitur dolor erat, rutrum sed eros at, porttitor malesuada odio.</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-single-container">
                        <div className="projects-single-container-inner">
                            <div className="projects-single">
                                <h3>Project 3</h3>
                                <p className="projects-single-text">Suspendisse quis feugiat lorem, vel euismod justo. Proin pretium turpis lorem, quis convallis nibh porta quis. Integer venenatis purus ipsum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-single-container">
                        <div className="projects-single-container-inner">
                            <div className="projects-single">
                                <h3>Project 4</h3>
                                <p className="projects-single-text">Mauris ut feugiat metus. Praesent at ultrices orci, sed rhoncus quam. Sed convallis, arcu ut maximus semper, felis tellus facilisis enim, ac ultrices velit ante at purus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-single-container">
                        <div className="projects-single-container-inner">
                            <div className="projects-single">
                                <h3>Project 5</h3>
                                <p className="projects-single-text">Nam ullamcorper aliquet magna, interdum lacinia tellus scelerisque et. Cras vel ligula ac mi molestie bibendum. Fusce nec accumsan dolor. Proin vitae tellus rutrum, gravida est feugiat, venenatis velit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-single-container">
                        <div className="projects-single-container-inner">
                            <div className="projects-single">
                                <h3>Project 6</h3>
                                <p className="projects-single-text">Quisque feugiat, justo posuere egestas aliquet, neque eros ornare dui, sit amet ultrices mauris neque at ligula. Curabitur dolor erat, rutrum sed eros at, porttitor malesuada odio.</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-single-container">
                        <div className="projects-single-container-inner">
                            <div className="projects-single">
                                <h3>Project 7</h3>
                                <p className="projects-single-text">Suspendisse quis feugiat lorem, vel euismod justo. Proin pretium turpis lorem, quis convallis nibh porta quis. Integer venenatis purus ipsum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-single-container">
                        <div className="projects-single-container-inner">
                            <div className="projects-single">
                                <h3>Project 8</h3>
                                <p className="projects-single-text">Mauris ut feugiat metus. Praesent at ultrices orci, sed rhoncus quam. Sed convallis, arcu ut maximus semper, felis tellus facilisis enim, ac ultrices velit ante at purus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom"></div>
        </div>
    )
};
module.exports = MainContainer;
