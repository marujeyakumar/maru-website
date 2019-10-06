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
        <p> Hi there! I'm Maru. This website is a work in progress. Currently I'm working on building a personal website showcasing 
          my professional experiences, interests, projects, and my front end developement skills using 
          React, Material UI and styled components. The website is hosted using AWS Amplify, and you can
          find the repository on Github, under my username marujeyakumar. 
        </p>
      </div>
    );
  }
}

export default App;
