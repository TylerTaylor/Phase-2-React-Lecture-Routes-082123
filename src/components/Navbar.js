import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div>
                <Link to="/">100 Acre Wood</Link>
            </div>

            <div className="nav-links">
                <NavLink to="/characters">Characters</NavLink>
                <NavLink to="/add_character">Add Character</NavLink>
            </div>
        </div>
    )
}

export default Navbar;