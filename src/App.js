import React, { Component } from 'react';
import NavBar from './components/NavBar'; 
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         Maru Jeyakumar 
         <NavBar />
        </header>
      </div>
    );
  }
}

export default App;
