import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className = "container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid nav_bg">
                            <NavLink className="navbar-brand" to="/">StreetFooders</NavLink>
                                <div className="collapse navbar-collapse justify-content-center p-2" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                        <NavLink activeClassName="menu_active" 
                                        exact className="nav-link active" 
                                        aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                </div>
                </nav>
</div>
</div>
</div>
</>
    );
}

export default Navbar;
