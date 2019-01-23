import React, { Component } from 'react';
import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header.js'
import Buttons from './components/Buttons.js'
import Books from './components/Books.js'
import Book from './components/Book.js'




class BooksPage extends Component {

  state = {
    booksData:[],
    showBook:false,


  }

  componentDidMount(){
    fetch("http://localhost:3003/books")
    .then(res => res.json())
    .then(res=>{
      this.setState({ booksData:res.books})


    })

  }


  render() {

    return (
      <div className="App">
        <Header />
        <Buttons />
        <div className="profileContainer">
        <Books booksData={this.state.booksData} />

        </div>
      </div>
    );
  }
}

export default BooksPage;
