import React, { Component } from 'react';
import './App.css';
import Main from './components/mainComponent';

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
