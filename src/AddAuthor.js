import React, { Component } from 'react';

import Header from './components/Header.js'





class AddAuthor extends Component {

  handleTitle = (e) => {
      this.setState({
        TitleValue: e.target.value
      })

  }



  handleDescription = (e) => {
      this.setState({
        DescriptionValue: e.target.value
      })
  }

  handleAuthor = (e) => {
      this.setState({
        AuthorValue: e.target.value
      })
  }

handleURL = (e) => {
    this.setState({
      URLValue: e.target.value
    })
}


  sendIt = async(e) => {
    e.preventDefault();
    console.log('hiiii')
      const url = 'http://localhost:3003/books'
      const payload = {
        Book_Title: this.state.TitleValue,
        Book_Genre: this.state.GenreValue,
        Book_Description:this.state.DescriptionValue,
        Book_Cover_URL:this.state.URLValue,


      }
      await fetch(url,{
        method: 'post',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(payload)
      }).then(function (response) {
        return response.json();
      }).then(res=> {
        this.setState({
          booksData: this.state.booksData.concat(res)
        })
      } )
    }





  render() {
    return (
      <div >
        <Header />
        <div className="addBookContainer">
          <div className="addBook">
            <h1>Add an Author </h1>
          </div>

        <div>
  <form class="formContainer">
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First Name" onChange={this.handleTitle}></input>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last Name" onChange={this.handleGenre}></input>
    </div>
    <input type="text" class="form-control" placeholder="Biography"onChange={this.handleDescription}></input>
    <div class="col">
      <input type="text" class="form-control dotted" placeholder="Book" disabled></input>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Portriat URL"onChange={this.handleURL}></input>
    </div>
  </div>
  <button type="submit" class="btn submit btn-primary"onClick={this.sendIt}>Submit New Author</button>
  info :


</form>
</div>
        </div>
      </div>



    )
}
}

export default AddAuthor;
