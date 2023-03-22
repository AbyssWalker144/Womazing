import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const links = [
        {
            to: '/',
            label: 'Главная'
        },
        {
            to: '/shop',
            label: 'Магазин'
        },
        {
            to: '/about',
            label: 'О бренде'
        },
        {
            to: '/contacts',
            label: 'Контакты'
        },
    ]

    return (
        <nav className="nav flex">
            {links.map(item => {
                return (
                    <NavLink to={item.to} key={item.to} className="link">{item.label}</NavLink>
                )
            })}
        </nav>
    );
};

export default Navbar;