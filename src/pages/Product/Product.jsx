import React, { useEffect, useState } from 'react';
import Caption from '../../components/UI/Caption';
import { NavLink, useLocation, useParams } from "react-router-dom";
import Item from "../../images/cards-img/classic-cotton-raincoat-1.jpg";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Card from "../../components/UI/Card";
import useCatalogData from "../../custom-hooks/useCatalogData";
import { useSelector } from 'react-redux';


const Product = () => {

  const { id } = useParams();

  const womazingData = useSelector(state => state.firebaseData.value);
  const [thisProductData, setThisProductData] = useState([]);

  useEffect(() => {
    if (womazingData.length !== 0) {
      const data = womazingData.filter(item => item.id === id);
      // console.log(data);
      setThisProductData(data[0]);
    }
  }, [id, womazingData]);

  console.log(thisProductData);
  console.log(thisProductData.color);

  // const productData = useCatalogData("womazing", id);
  // console.log(productData);

  // const location = useLocation();
  // const data = location.state?.data;
  // console.log(data);

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
    "dark-blue": "#1A222E",
    "light-brown": "#C4A484",
    "white": "#FFFFFF",
    "pink": "#F81894",
    "red": "#FF0000",
    "fuchsia": "#BF026D",
    "sky-blue": "#2892EA",
  };

  const colorsNamesFromObj = Object.keys(colorsCodesObj);
  // console.log(colorsNamesFromObj);

  const [colorsOfOurProduct, setColorsOfOurProduct] = useState([]);

  useEffect(() => {
    if (thisProductData.length == 0) return

    setColorsOfOurProduct(Object.keys(thisProductData.color));

  }, [thisProductData]);

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
  };

  // console.log(colorsObj);

  let colorsNames = Object.keys(colorsObj);

  console.log(colorsNames);




  const storage = getStorage();
  const imgRef = ref(storage, `${thisProductData.mainImage}`);

  const [imgsRef, setImgsRef] = useState({});

  const [currentClothColor, setCurrentClothColor] = useState([]);

  // set imgs url
  useEffect(() => {
    setImgsRef({});
    const refs = {};
    for (const item in thisProductData.color) {
      refs[item] = [];
      thisProductData.color[item].map(imgName => {
        if (imgName) {
          getDownloadURL(ref(storage, imgName))
            .then((url) => {
              refs[item].push(url);
              console.log(url);
            })
            .catch((error) => {
              console.log(error);
            });
        }
        console.log(imgName);
      });
      setImgsRef(refs);
    }
    setCurrentClothColor(Object.values(imgsRef));
  }, [thisProductData]);

  console.log(Object.values(imgsRef));
  console.log(currentClothColor);

  useEffect(() => {
    console.log(imgsRef);
  }, [imgsRef]);


  const [imgUrl, setImgUrl] = useState('');

  getDownloadURL(imgRef)
    .then((url) => {

      setImgUrl(url);

    })
    .catch((error) => {
      console.log(error);
    });



  //onClick for <li> with color:
  function chooseColor(e) {
    console.log(e.target.dataset.dataColor);
    let thisColor = '';
    for (const color in imgsRef) {
      console.log(color);
      if (color !== e.target.dataset.dataColor) continue;

      thisColor = imgsRef[color];
      console.log(imgsRef[color]);
    }
    setCurrentClothColor(thisColor);
    console.log(currentClothColor);
  };

  useEffect(() => {
    setCurrentClothColor([]);
  }, [thisProductData]);

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const handleSwitch = (colorIndex) => {
    setCurrentPhoto(colorIndex);
  };

  return (
    <div>
      <Caption caption={thisProductData.name} />
      <div className="bread-crumbs">
        <NavLink to="/">Главная</NavLink>
        <span>—</span>
        <NavLink to="/shop">Магазин</NavLink>
        <span>—</span>
        <NavLink to={"/shop/" + thisProductData.category}
        // onClick={}
        >{thisProductData.category}</NavLink>
        <span>—</span>
        <p>{thisProductData.name}</p>
      </div>
      {/*END of bread-crumbs*/}

      <div className="product">
        <div className="product__info flex">
          <div className='imgBlock'>
            <img src={currentClothColor[0] ? currentClothColor[currentPhoto] : imgUrl} alt={thisProductData.name} />

            <div className='colorSwitcher flex'>
              {currentClothColor.map((color, colorIndex) => (
                <div key={colorIndex} className={`rectangle ${currentPhoto === colorIndex ? 'active' : ''}`} onClick={() => handleSwitch(colorIndex)}></div>
              ))}
            </div>

          </div>

          <div className="product__allOptions">
            <h2 className="product__price">{thisProductData.price} грн</h2>

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
                  <li style={{ backgroundColor: colorsObj[name] }} key={name} title={name} data-data-color={name} className="product__options-colorBtn"
                    onClick={chooseColor}
                  />
                ))
              }

            </ul>

            {/*<p className="product__colors__value color">Один цвет</p>*/}

            <div className="product__form flex">
              <input className="product__form__input" type="number" min='1' defaultValue='1' />
              <button className="product__form__btn button">Добавить в корзину</button>
            </div>

          </div>
          {/*END of product__options*/}

        </div>
        {/*END of img & options of product*/}
        <p className="product__description">{thisProductData.description}</p>
      </div>
      {/*END of product*/}

      <h2 className="relatedProducts">Связанные товары</h2>
      <div className="flex relatedProducts__cards">
        {womazingData.length !== 0 &&
          womazingData.map(item => {
            if (item.category === thisProductData.category && item.id !== thisProductData.id) return <Card {...item} />
          })
        }
      </div>

    </div>
  );
};

export default Product;