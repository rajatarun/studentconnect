import React, { Component } from 'react';
import Writing from '../../Libraries/Writing/Writing';
//import logo from './logo.svg';
import './HomeComponent.css';

class HomeComponent extends Component {
    render() {
        return(
            <div className="Home-Container">
                <div className="Left">
                    <i class="fa fa-user-circle-o fa-5x profile-picture" aria-hidden="true"></i>
                </div>
                <div className="Right">
                    <h1 className="main-heading animated fadeInRight">{this.props.name.toUpperCase()}</h1>
                </div>
                <div className="float-left"></div>
            </div>
        )
    }
}
export default HomeComponent;