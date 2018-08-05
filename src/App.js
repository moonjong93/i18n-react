import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Me, About } from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Me} name="me"/>
        <Route exact path="/about" component={About} name="about"/>
      </div>
    );
  }
}

export default App;
