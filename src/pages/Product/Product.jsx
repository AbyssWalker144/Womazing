import React, {useEffect, useState} from 'react';
import Caption from '../../components/UI/Caption';
import {NavLink, useLocation, useParams} from "react-router-dom";
import Item from "../../images/cards-img/classic-cotton-raincoat-1.jpg";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import Card from "../../components/UI/Card";

const Product = () => {

  const location = useLocation();
  const data = location.state?.data;
  console.log(data);
  // console.log(data.price);

  const colorsCodesObj = {
    "ecru": "#f2e1cd",
    "khaki": "#4a601b",
    "orange": "#ffa500",
    "coral-red": "#e68070",
    "black": "#000000",
    "green": "#008000",
    "light-purple": "#b695c0",
    "grey": "#808080",
    "brown": "#3b2904",
    "beige": "#f5f5dc",
    "dark-blue": "#00008b",
    "light-brown": "#C4A484",
    "white": "#FFFFFF",
    "pink": "#F81894",
    "red": "#FF0000",
    "fuchsia": "#BF026D",
  };

  const colorsNamesFromObj = Object.keys(colorsCodesObj);
  console.log(colorsNamesFromObj);

  const colorsOfOurProduct = Object.keys(data.color);
  console.log(colorsOfOurProduct);

  let colorsObj = [];

  for (let color of colorsOfOurProduct) {
    colorTheCircle(colorsNamesFromObj, color);
  }

  function colorTheCircle(colorsNamesFromObj, color) {
    colorsNamesFromObj.forEach(nameKey => {
      if (color === nameKey) {
        // console.log(`${nameKey} : ${colorsCodesObj[nameKey]}`);
        colorsObj[nameKey] = colorsCodesObj[nameKey];
      }
    });
  }

  console.log(colorsObj);

  let colorsNames = Object.keys(colorsObj);

  //onClick for <li> with color:
  function chooseColor() {

  }


  const storage = getStorage();
  const imgRef = ref(storage, `${data.mainImage}`);

  const [imgUrl, setImgUrl] = useState('');

  getDownloadURL(imgRef)
    .then((url) => {

      setImgUrl(url);

    })
    .catch((error) => {
      // Handle any errors
    });


  return (
    <div>
      <Caption caption={data.name}/>
      <div className="bread-crumbs">
        <NavLink to="/">Главная</NavLink>
        <span>—</span>
        <NavLink to="/shop">Магазин</NavLink>
        <span>—</span>
        <NavLink to="/shop"
          // onClick={}
        >{data.category}</NavLink>
        <span>—</span>
        <p>{data.name}</p>
      </div>
      {/*END of bread-crumbs*/}

      <div className="product">
        <div className="product__info flex">
          <img src={data.mainImage ? imgUrl : Item} alt={data.name}/>

          <div className="product__allOptions">
            <h2 className="product__price">{data.price} грн</h2>

            <h4>Размер:</h4>
            <ul className="product__options flex">
              {/*{data.size ?*/}
              {/*  <>*/}
              {/*    {data.size.map((size) => (*/}
              {/*      <li className="product__size">{size}</li>*/}
              {/*    ))}*/}
              {/*  </>*/}
              {/*  : */}
              <li className="product__options__universal size">Универсальный размер</li>
            </ul>
            {/*}*/}

            <h4>Цвет:</h4>
            <ul className="product__options flex">

              {
                colorsNames.map(name => (
                  <li style={{backgroundColor: colorsObj[name]}} title={name} className="product__options-colorBtn"
                      // onClick={chooseColor()}
                  />
                ))
              }

            </ul>

            {/*<p className="product__colors__value color">Один цвет</p>*/}

            <div className="product__form flex">
              <input className="product__form__input" type="number" min='1' defaultValue='1'/>
              <button className="product__form__btn button">Добавить в корзину</button>
            </div>

          </div>
          {/*END of product__options*/}

        </div>
        {/*END of img & options of product*/}
        <p className="product__description">{data.description}</p>
      </div>
      {/*END of product*/}

      <h2 className="relatedProducts">Связанные товары</h2>
      <div className="flex relatedProducts__cards">
        <Card/>
        <Card/>
      </div>

    </div>
  );
};

export default Product;