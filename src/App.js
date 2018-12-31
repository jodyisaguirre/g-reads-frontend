import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Splash from './components/Splash.js'
import AuthorsPage from './AuthorsPage.js'
import BooksPage from './BooksPage.js'
import AddBook from './AddBook.js'






class App extends Component {
  render() {
    return (
<div className="App" >
  <BrowserRouter>
      <div>
          <Switch>
            <Route path='/' component={Splash} exact />
            <Route path='/Home' component={Splash} exact />
            <Route path='/AuthorsPage' component={AuthorsPage} exact />
            <Route path='/BooksPage' component={BooksPage} exact />
            <Route path='/AddBook' component={AddBook} exact />



          </Switch>
      </div>
      </BrowserRouter>







      </div>
    );
  }
}

export default App;
