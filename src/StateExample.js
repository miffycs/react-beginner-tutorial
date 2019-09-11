import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    count: 0
  }

  increment = () => {
    const newNumber = this.state.count + 1;
    this.setState({ count: newNumber });
  }

  decrement = () => {
    const newNumber = this.state.count - 1;
    this.setState({ count: newNumber });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button onClick={this.decrement}>-</button>
            <div style={{ display: "inline-block", margin: "0 20px" }}>
              Count: {this.state.count}
            </div>
            <button onClick={this.increment}>+</button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
