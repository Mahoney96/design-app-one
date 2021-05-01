import React, { Component } from 'react';

class GridLayout extends Component {
    render(){
        return(
            <div className="Grid-layout">
                <h1 className="Grid-header">
                    <nav className="Grid-nav">
                       <a className="Grid-investor"
                        href="https://www.linkedin.com/"
                        traget="_blank"
                        rel="noopener noreferrer"
                        > BUILDER</a>

                        <a className="Grid-builder"
                        href="https://css-tricks.com/snippets/css/complete-guide-grid/"
                        traget="_blank"
                        rel="noopener noreferrer"
                        > EDUCATOR</a>

                        <a className="Grid-educator"
                        href="https://reactrouter.com/core/api/Hooks"
                        traget="_blank"
                        rel="noopener noreferrer"
                        > INVESTOR</a>
                    </nav>
                </h1>
                <div className ="Grid-aside-sect">Side Section of Landing Page.</div>
            </div>
        );
    }
};
 
export default GridLayout;
