import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header.js'

library.add(faStroopwafel)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="profileContainer">
        <i class="fas fa-book"></i>
        <i class="fas fa-user"></i>
        </div>
      </div>
    );
  }
}

export default App;
