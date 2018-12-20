import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = () => (
<div>
  <nav class="navbar navbar-expand-lg ">
  <i class="far fa-file-alt"></i>
  <a class="navbar font" href="#">Galvanize Reads</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
    <ul class="navbar-nav ">
      <li class="nav-item active  ">
        <a class="nav-link"  href="#">Books <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">Authors</a>
      </li>
    </ul>
  </div>
</nav>



  </div>
)

export default Header;
