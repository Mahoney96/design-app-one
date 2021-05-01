import React, { Component } from 'react';

class OldGridLayout extends Component {
    render(){
        return(
            <div className="Grid-layout">
                <header className="Grid-header">
                    Header
                </header>
                <nav className="Grid-nav">
                    Nav
                </nav>
                <main className ="Grid-main">
                    <article>
                        <details>
                            <summary>Article</summary>
                            <p>Placeholder</p>
                        </details>
                    </article>
                </main>
                <aside className="Grid-footer">
                    Aside Section. 
                </aside>
            </div>
        );
    }
};

export default OldGridLayout;