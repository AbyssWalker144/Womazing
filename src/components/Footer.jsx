import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../images/icons/logo.svg";
import Navbar from "./Navbar";
import Icon from "../images/sprites/Icon";
import Instagram from "../images/icons/instagram.svg";
import Facebook from "../images/icons/facebook.svg";
import Twitter from "../images/icons/twitter.svg";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <Link to='/' className='logo'>
                    <img src={Logo} alt="logo"/>
                </Link>
                <Navbar />
                <div className='footer__contacts'>
                    <a href='tel:+38099999999' className="phone flex">
                        <Icon name="phone" color="#fff" size="32"/>
                        +38099999999
                    </a>
                    <a href='mailto:example@gmail.com'>example@gmail.com</a>
                    <div className='footer__social'>
                        <img src={Instagram}/>
                        <img src={Facebook}/>
                        <img src={Twitter}/>
                    </div>
                    <img src={require('../images/icons/visa-mastercard 1.png')}/>
                </div>
                <div className='copyright'>
                    <p>@Все права защищены</p>
                    <a href='#'>Политика конфиденциальности</a>
                    <a href='#'>Публичная оферта</a>
                </div>
                <div className='catalog'>
                    <Link to='/'>Пальто</Link>
                    <Link to='/'>Свитшоты</Link>
                    <Link to='/'>Кардиганы</Link>
                    <Link to='/'>Толстовки</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;