import React, { Component } from 'react';

class LandingPage extends Component {
    render(){
        return(
            
            <h1 className=" "> Main header Container
                <div className=""> Presentational Container holding the three clickable components.

                    <a className=""
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >INVESTOR</a>

                    <a className=""
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >BUILDER</a>


                    <a className=""
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >EDUCATOR</a>
                    


                </div>
                


                <div className="">Footer Presentational Component</div>
            </h1>

        );
    }
};