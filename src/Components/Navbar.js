import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="nav navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">BrandName</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/features">Features</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pricing">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}


