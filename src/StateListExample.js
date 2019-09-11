import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    todos: ["Go to Hackathon", "Make project", "Eat food", "Test", "Win Hackathon"]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {this.state.todos.map((todo, index) => {
              return <li key={index}>{todo}</li>;
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
