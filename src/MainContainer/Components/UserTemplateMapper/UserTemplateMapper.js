import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import HomeComponent from '../HomeComponent/HomeComponent';
class UserTemplateMapper extends Component {
    render() {
        let template;
        switch(this.props.template){
            case "1":
                template= (<HomeComponent name={this.props.data}/>);
        }
        return template
    }
}
export default UserTemplateMapper;