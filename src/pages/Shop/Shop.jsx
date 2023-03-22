import React, {useEffect, useState} from 'react';
import Card from "../../components/UI/Card";
import Caption from "../../components/UI/Caption";
import Pagination from "../../components/Pagination";
import {Link} from "react-router-dom";
import useCatalogData from "../../custom-hooks/useCatalogData";
import {useSelector} from "react-redux";

const Shop = () => {

    const value = useSelector(state => state.firebaseData.jsonObj);
    // console.log(value);

    const womazing = useCatalogData('womazing');
    console.log(womazing);

    // const dataBase = [womazing.cardigan, womazing.coat, womazing.sweatshirt, womazing.tolstovki];
    // console.log(dataBase);

    const categories = ['Все', 'Пальто', 'Свитшоты', 'Кардиганы', 'Рубашки'];





    const [checked, setChecked] = useState("");
    const [paginationData, setPaginationData] = useState([]);


    console.log(paginationData);

    const handleChange = event => {

        setPaginationData([]);
        setChecked(event.target.value);
        const tempData = womazing.filter(item => {

            if(item.category.includes(event.target.value)) {
                return [ item, ...paginationData ];
            }

        })

        console.log(tempData);
        setPaginationData(tempData);

    }
    console.log(paginationData);
    console.log(paginationData[0]);

    // const [status, setStatus] = useState('all');
    //
    // const [catalog, setCatalog] = useState(null);
    //
    const hand = (e) => {

    }

    return (
        <div className="shop">
            <Caption caption="Магазин"/>
          <div className="bread-crumbs">
            <Link to="/">Главная</Link> <span>—</span>  <p to="/shop">Магазин</p>
          </div>

            <form className="shop__filter">

                <input type="radio" id="filter1" name="filter-options" value="" checked={checked === ""} onChange={handleChange}/>
                {/*<label htmlFor="filter1">Все</label>*/}

                <input type="radio" id="filter2" name="filter-options" value="Пальто" checked={checked === "Пальто"} onChange={handleChange}/>
                {/*<label htmlFor="filter2">Пальто</label>*/}

                <input type="radio" id="filter3" name="filter-options" value="Свитшоты" checked={checked === "Свитшоты"} onChange={handleChange}/>
                {/*<label htmlFor="filter3">Свитшоты</label>*/}

                <input type="radio" id="filter4" name="filter-options" value="Кардиганы" checked={checked === "Кардиганы"} onChange={handleChange}/>
                {/*<label htmlFor="filter4">Кардиганы</label>*/}

                <input type="radio" id="filter5" name="filter-options" value="Рубашки" checked={checked === "Рубашки"} onChange={handleChange}/>
                {/*<label htmlFor="filter5">Рубашки</label>*/}

            </form>

            {/*<ul className="shop__list flex">*/}
            {/*    {categories.map(item => {*/}
            {/*        return (*/}
            {/*            <li key={item} className="shop__item" onClick={hand}>{item}</li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}

            <p>Показано: 9 из 12 товаров</p>
            <div className="cards flex">

                <Pagination data = { paginationData[0] ?  paginationData : womazing}/>

            </div>




            {/*<div className="pagination flex">*/}
            {/*    <Link to="/page1" className="pagination__number">1</Link>*/}
            {/*    <Link to="/page2" className="pagination__number">2</Link>*/}
            {/*    /!*<Link to="/next">*!/*/}
            {/*    /!*    <Icon name="arrow" color="#000" size="18"/>*!/*/}
            {/*    /!*</Link>*!/*/}
            {/*</div>*/}
        </div>
    );
};

export default Shop;