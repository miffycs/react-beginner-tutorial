import React, { Component } from 'react';
import App from './PropsExample';

class App extends Component {
  render() {
    return (
      <div>
        <App name="Sarah" />
        <App name="Andy" />
      </div>
    );
  }
}

export default App;
