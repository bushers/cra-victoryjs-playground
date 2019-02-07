import React, { Component } from 'react';
import './App.css';
import Content from './components/Content';
import Victory from './components/Victory/Victory';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Content>
          <h1 className="app__title">Victory Charts Playground</h1>
          <Victory />
        </Content>
      </div>
    );
  }
}

export default App;
