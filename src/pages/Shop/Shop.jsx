import React, {useEffect, useState} from 'react';
import Card from "../../components/UI/Card";
import Caption from "../../components/UI/Caption";
import Pagination from "../../components/Pagination";
import {Link} from "react-router-dom";
import useCatalogData from "../../custom-hooks/useCatalogData";
import { useSelector, useDispatch } from 'react-redux';
import {NavLink} from "react-router-dom";

const Shop = () => {

    const womazingData = useSelector((state) => state.firebaseData.value);
    console.log(womazingData);

    const categories = [
        {
            to: '/shop',
            label: 'Все'
        },
        {
            to: '/shop/Пальто',
            label: 'Пальто'
        },
        {
            to: '/shop/Свитшоты',
            label: 'Свитшоты'
        },
        {
            to: '/shop/Кардиганы',
            label: 'Кардиганы'
        },
        {
            to: '/shop/Рубашки',
            label: 'Рубашки'
        },
    ]

    const setActive = ({isActive}) => isActive ? 'filter-option active' : 'filter-option';

    return (
        <div className="shop">
            <Caption caption="Магазин"/>
          <div className="bread-crumbs">
            <Link to="/">Главная</Link> <span>—</span>  <p to="/shop">Магазин</p>
          </div>

            <nav className="shop__filter">

                {categories.map(item => {
                    return (
                        <NavLink end to={item.to} key={item.to} className={setActive}>{item.label}</NavLink>
                    )
                })}

            </nav>

            <p>Показано: 9 из 12 товаров</p>
            <div className="cards flex">

                <Pagination data = { womazingData }/>

            </div>

        </div>
    );
};

export default Shop;