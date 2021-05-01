import React, { Component } from 'react';

class LandingPage extends Component {
    render(){
        return(
            <div className="grid-main">
            <h1 className="Header-parent"> Main header Container
                <div className="Header-parent"> Presentational Container holding the three clickable components.

                    <a className="Header-child"
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >INVESTOR</a>

                    <a className="Header-child"
                        href="https://code.visualstudio.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >BUILDER</a>


                    <a className="Header-child"
                        href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >EDUCATOR</a>

                </div>
                


                <div className="Landing-page-footer">Footer Presentational Component</div>
            </h1>
            </div>
        );
    }
};

export default LandingPage;