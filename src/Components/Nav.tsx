import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav=()=>{
    return(
        <>
        <ul className="nav-links">
            <li><Link to="/">FIRST</Link></li>
            <li><Link to="/second">SECOND</Link></li>
            <li><Link to="/third">THIRD</Link></li>
            <li><Link to="/customers/add">Customers-Add</Link></li>
        </ul>
        </>
    );
}

export default Nav;