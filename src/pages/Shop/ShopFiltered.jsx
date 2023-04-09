import React, {useEffect, useState} from 'react';
import Card from "../../components/UI/Card";
import Caption from "../../components/UI/Caption";
import Pagination from "../../components/Pagination";
import {Link} from "react-router-dom";
import useCatalogData from "../../custom-hooks/useCatalogData";
import {NavLink} from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const ShopFiltered = (props) => {

    const { category } = useParams();
    console.log(category);

    const womazingData = useSelector((state) => state.firebaseData.value);



    const filteredData = womazingData.filter(item => item.category === category);
    console.log(filteredData);

    const categories = ['Все', 'Пальто', 'Свитшоты', 'Кардиганы', 'Рубашки'];

    const [checked, setChecked] = useState("");
    const [paginationData, setPaginationData] = useState([]);

    console.log(paginationData);

    // const handleChange = event => {

    //     setPaginationData([]);
    //     setChecked(event.target.value);
    //     const tempData = womazing.filter(item => {
    //         console.log(item.category);

    //         item => item.category === category;

    //     })

    //     console.log(tempData);
    //     setPaginationData(tempData);

    // }
    console.log(paginationData);
    console.log(paginationData[0]);

    return (
        <div className="shop">
            <Caption caption="Магазин"/>
          <div className="bread-crumbs">
            <Link to="/">Главная</Link> <span>—</span>  <p to="/shop">Магазин</p>
          </div>

            <nav className="shop__filter">

                <NavLink className="filter-option" to={'/shop'} >Все товары</NavLink>

                <NavLink className="filter-option" to={'/shop/Пальто'} >Пальто</NavLink>

                <NavLink className="filter-option" to={'/shop/Свитшоты'} >Свитшоты</NavLink>

                <NavLink className="filter-option" to={'/shop/Кардиганы'} >Кардиганы</NavLink>

                <NavLink className="filter-option" to={'/shop/Рубашки'} >Рубашки</NavLink>

            </nav>

            <p>Показано: 9 из 12 товаров</p>
            <div className="cards flex">

                <Pagination data = { filteredData.lengh !== 0 ?  filteredData : womazingData}/>

            </div>

        </div>
    );
};

export default ShopFiltered;