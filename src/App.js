import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './MainContainer/mainContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer name={this.props.match.params.name} id={"1"}></MainContainer>
      </div>
    );
  }
}

export default App;
