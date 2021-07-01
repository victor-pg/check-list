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
            <li><Link to="/settings/site/sharing">Settings-Site-Sharing</Link></li>
            <li><Link to="/settings/shop/notifications">Settings-Shop-Notifications</Link></li>
            <li><Link to="/orders/list">Orders-List</Link></li>
        </ul>
        </>
    );
}

export default Nav;