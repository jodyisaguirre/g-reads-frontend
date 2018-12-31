import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';


export const Header = () => (
<div>
  <nav class="navbar navbar-expand-lg ">
  <i class="far fa-file-alt"></i>
  <Link to="Home">
  <a class="navbar font" href="#">Galvanize Reads</a>
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
    <ul class="navbar-nav ">
      <li class="nav-item active  ">
        <Link to="BooksPage">
        <a class="nav-link"  href="#">Books <span class="sr-only">(current)</span></a>
        </Link>
      </li>
      <li class="nav-item ">
      <Link to="AuthorsPage">
        <a class="nav-link" href="#">Authors</a>
        </Link>
      </li>
    </ul>
  </div>
</nav>



  </div>
)

export default Header;
