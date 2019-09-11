import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <li>Welcome, {props.name}</li>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <Welcome name="Pedro" />
            <Welcome name="Jimmy" />
            {/* {this.props.name} */}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
