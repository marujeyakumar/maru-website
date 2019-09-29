import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

import './App.css';

/* Tyring out styled components and material UI */
const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         Maru Jeyakumar 
        </header>
      </div>
    );
  }
}

export default App;
