import React, { Component } from 'react';
import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header.js'
import Authors from './components/Authors.js'
import Buttons from './components/Buttons.js'

class AuthorsPage extends Component {

  state = {
    authorsData:[],

  }

  componentDidMount(){
    fetch("http://localhost:3003/authors")
    .then(res => res.json())
    .then(res=>{
      this.setState({ authorsData:res.authors})
      console.log(this.state.authorsData,"this is it ");

    })

  }


  render() {

    return (
      <div className="App">
        <Header />
        <Buttons />
        <div className="profileContainer">
        <Authors authorsData={this.state.authorsData} />
        </div>
      </div>
    );
  }
}

export default AuthorsPage;
