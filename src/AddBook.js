import React, { Component } from 'react';

import Header from './components/Header.js'





class AddBook extends Component {
  state = {
    booksData:[],



  }

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
    console.log(e.target.value);

}


  sendIt = async(e) => {
    e.preventDefault();
    console.log(this.state.TitleValue)
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
            <h1>Add Book </h1>
          </div>

        <div>
  <form class="formContainer">
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Title" onChange={this.handleTitle}></input>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Genre" onChange={this.handleGenre}></input>
    </div>
    <input type="text" class="form-control" placeholder="Description"onChange={this.handleDescription}></input>
    <div class="col">
      <input type="text" class="form-control dotted" placeholder="Author" disabled></input>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="cover URL"onChange={this.handleURL}></input>
    </div>
  </div>
  <button type="submit" class="btn submit btn-primary"onClick={this.sendIt}>Submit a Book</button>



</form>
</div>
        </div>
      </div>



    )
}
}

export default AddBook;
