import React from 'react'
import { Link } from 'react-router-dom';


const Books = ({booksData}) => {


const booksComponents = booksData.map(book => {
  return (
    <div className="pageContainer">

        <img className="image" src={book.Book_Cover_URL} />

      <div className="content">
        <h2>{book.Book_Title} </h2>
        <h5>Genre: {book.Book_Genre}</h5>
        <h5>Author(s):<a className="details"href="">Alex Martlei </a></h5>
        <h6>{book.Book_Description}</h6>
        <div className="link">
        <Link to="Book">
          <a><h5>Details</h5></a>
          </Link>

        </div>
      </div>


    </div>
  )
})


  return(
      // rendering the stored variable
    <div>

      {booksComponents}
    </div>
  )


}

export default Books
