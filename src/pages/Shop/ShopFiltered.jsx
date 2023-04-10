import React, {useEffect, useState} from 'react';
import Card from "../../components/UI/Card";
import Caption from "../../components/UI/Caption";
import Pagination from "../../components/Pagination";
import {Link} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const ShopFiltered = () => {

    const { category } = useParams();
    console.log(category);

    const womazingData = useSelector((state) => state.firebaseData.value);

    const filteredData = womazingData.filter(item => item.category === category);
    console.log(filteredData);

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
            <Link to="/">Главная</Link> <span>—</span>  <Link to="/shop">Магазин</Link> <span>—</span> <p>{category}</p>
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

                <Pagination data = { filteredData.lengh !== 0 ?  filteredData : womazingData}/>

            </div>

        </div>
    );
};
export default ShopFiltered;