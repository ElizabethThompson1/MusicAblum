import React from "react"
import "./Header.css"

function Header () {
    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" href="#">Home</a>
                    <a class="nav-link" href="#">SearchBar</a>
                    <a class="nav-link" href="#">MusicTable</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;