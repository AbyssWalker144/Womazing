import React, { useEffect, useState } from 'react';
import Card from "../../components/UI/Card";
import Caption from "../../components/UI/Caption";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Blocks } from 'react-loader-spinner';

const ShopFiltered = () => {

    const { category } = useParams();
    console.log(category);

    const womazingData = useSelector(state => state.firebaseData.value);

    const [filteredData, setFilteredData] = useState([]);
    const [visibility, setVisibility] = useState([true]);

    useEffect(() => {
        if (womazingData) {
            const data = womazingData.filter(item => item.category === category);
            setFilteredData(data);
            setVisibility(false);
        } else { setVisibility(true) }
    }, [category, womazingData]);

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

    const setActive = ({ isActive }) => isActive ? 'filter-option active' : 'filter-option';

    return (
        <div className="shop">
            <Caption caption="Магазин" />
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
            <Blocks
                visible={visibility}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="spinner"
            />
            <div className="cards flex">

                <Pagination data={filteredData} />

            </div>

        </div>
    );
};
export default ShopFiltered;