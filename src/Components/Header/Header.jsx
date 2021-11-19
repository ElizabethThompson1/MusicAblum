import React from "react"
import "./Header.css"

function Header () {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#">SearchBar</a>
                    <a className="nav-link" href="#">MusicTable</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;