import React from 'react';
import { Link } from 'react-router-dom';






const Buttons= () => {
    return (

      <div className="buttonContainer">
      <Link to="AddBook"class="btn">

      <button type="button" class="btn">Add Book</button>
      </Link>
      <Link to="AddAuthor"class="btn">
      <button type="button" class="btn">Add Author</button>
      </Link >


      </div>



    );
};

export default Buttons;
