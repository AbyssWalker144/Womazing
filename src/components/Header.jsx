import React from 'react';
import {Link} from "react-router-dom";
import Icon from "../images/sprites/Icon";
import Logo from "../images/icons/logo.svg";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="header">
            <div className="container flex">
            <Link to='/' className='logo'>
                <img src={Logo} alt="logo"/>
            </Link>
            <Navbar />
            <div className='contacts flex'>
                <a href='tel:+38099999999' className="phone flex">
                    <Icon name="phone" color="#fff" size="32"/>
                    +38099999999
                </a>
                <Link to="/cart">
                    <Icon name="basket" color="#fff" size="32"/>
                </Link>
            </div>
            </div>
        </header>
    );
};


export default Header;