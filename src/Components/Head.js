import React from 'react'
import "./main.css"

function Head() {
  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">

<a className="navbar-brand" href="index.html"><strong>FoodTopia &emsp; &emsp; &emsp; </strong></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search Food" aria-label="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <a className="nav-link" href="#">Login <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Sign up</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" href="#">Help</a>
    </li>
  </ul>
</div>

</nav>
    </div>
  )
}

export default Head