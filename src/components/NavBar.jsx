import React from 'react';
import { NavLink } from 'react-router-dom';
import { getLocalStorage } from '../functions/localStorage.js';

function NavBar() {
    const username = getLocalStorage('username');

    return (
        <nav className='navbar navbar-dark bg-navDark sticky-top'>
            <h3 className='navbar-text'>{username}</h3>
            <NavLink className='btn btn-outline-success my-2 my-sm-0' to='/'>
                Change User
            </NavLink>
        </nav>
    );
}

export default NavBar;
