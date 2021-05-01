
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';


class TakeTwoGrid extends Component {

    render(){

        return(

            <div className="container-grid">

                <div className="item-a"> Header Section.</div>
                
                <br></br>
                <div className="item-b"> Main Page Section.</div>
                <br></br>
                <div className="item-c"> Sidebar Section.</div>
                <br></br>
                <div className="item-d">Footer Section.</div>

            </div>
        );
    }
};

export default TakeTwoGrid;