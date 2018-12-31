import React from 'react';
import Header from './components/Header.js'





const AddBook= () => {
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
      <input type="text" class="form-control" placeholder="First name"></input>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name"></input>
    </div>
    <input type="text" class="form-control" placeholder="Descrition"></input>
    <div class="col">
      <input type="text" class="form-control dotted" placeholder="Author"></input>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="cover URL"></input>
    </div>
  </div>
  <button type="submit" class="btn submit btn-primary">Submit a Book</button>


</form>
</div>
        </div>
      </div>



    );
};

export default AddBook;
