import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Navigation from './Navigation'
import UserTemplateMapper from './Components/UserTemplateMapper/UserTemplateMapper'
class MainContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="nav-container">
                    <Navigation></Navigation>
                </div>
                <div className="main-content">
                    <UserTemplateMapper template={"1"} data={this.props.name} />
                </div>
            </div>
        );
    }
}
export default MainContainer;