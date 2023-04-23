import React, { useRef, useEffect, useState } from 'react';
import Caption from '../../components/UI/Caption';
import { NavLink, useLocation, useParams } from "react-router-dom";
import Item from "../../images/cards-img/classic-cotton-raincoat-1.jpg";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Card from "../../components/UI/Card";
import useCatalogData from "../../custom-hooks/useCatalogData";
import { useSelector } from 'react-redux';
import ProductCarousel from './ProductCarousel';


const Product = () => {

  const { id } = useParams();

  const womazingData = useSelector(state => state.firebaseData.value);
  console.log(womazingData);
  const [thisProductData, setThisProductData] = useState({});

    useEffect(() => {
      if (womazingData.length !== 0) {
        const data = womazingData.filter(item => item.id === id);
        console.log(data);
        setThisProductData(data[0] || {});
      }
    }, [id, womazingData]);

  console.log(`thisProductData:`, thisProductData);
  console.log(thisProductData.color);

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
    if (!Object.keys(thisProductData).length) return

    setColorsOfOurProduct(Object.keys(thisProductData.color));

  }, [thisProductData]);

  console.log(`colorsOfOurProduct`, colorsOfOurProduct);

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

  console.log(`colorsNames`, colorsNames);

  const storage = getStorage();

  const [imgsRef, setImgsRef] = useState({});

  // set imgs url
  // useEffect(() => {
  //   setImgsRef({});
  //   const refs = {};
  //   for (const item in thisProductData.color) {
  //     refs[item] = [];
  //     thisProductData.color[item].forEach(imgName => {
  //       if (imgName) {
  //         getDownloadURL(ref(storage, imgName))
  //           .then((url) => {
  //             refs[item].push(url);
  //             console.log(url);
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //           });
  //       }
  //       console.log(imgName);
  //     });
  //   }
  //   setImgsRef(refs);
  // }, [thisProductData]);

  useEffect(() => {
    setImgsRef({});
    console.log('--------refs useEffect---------');
    const fetchImgUrls = async () => {
      const refs = {};
      for (const item in thisProductData.color) {
        console.log(thisProductData.color);
        console.log('item:', item);
        refs[item] = [];
        await Promise.all(
          thisProductData.color[item].map(async (imgName) => {
            console.log('imgName:', imgName);
            if (imgName) {
              const url = await getDownloadURL(ref(storage, imgName));
              console.log(imgName);
              console.log(url);
              refs[item].push(url);
            }
          })
        );
      }
      console.log(`refs`, refs);
      console.log(`thisProductData`, thisProductData);
      setImgsRef(refs);
    };
    fetchImgUrls();
  }, [thisProductData, storage]);

  console.log('imgsRef', imgsRef);

  useEffect(() => {
    console.log(imgsRef);
    console.log(Object.values(imgsRef)[0]);
  }, [id, imgsRef]);


  const [currentPhoto, setCurrentPhoto] = useState(0);
  const handleSwitch = (colorIndex) => {
    setCurrentPhoto(colorIndex);
  };

  const [currentClothPhotos, setCurrentClothPhotos] = useState([]);

  useEffect(() => {
    console.log(currentClothPhotos);
  }, [currentClothPhotos]);

  //onClick for <li> with color:
  function chooseColor(e) {
    console.log(e.target);
    setCurrentPhoto(0);
    console.log(e.target.dataset.dataColor);
    console.log(imgsRef);
    let thisColor = '';
    for (const color in imgsRef) {
      console.log(color);
      if (color !== e.target.dataset.dataColor) continue;

      thisColor = imgsRef[color];
      console.log(imgsRef[color]);
    }
    setCurrentClothPhotos(thisColor);
  };

  // useEffect(() => {
  //   setCurrentClothPhotos([]);
  // }, [thisProductData]);

  const firstLiRef = useRef(null);

  useEffect(() => {
    const firstColor = firstLiRef.current;
    console.log(firstColor);
    if (firstColor) firstColor.click();
  }, [imgsRef])

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
            {/* <img src={currentClothPhotos[0] ? currentClothPhotos[currentPhoto] : imgUrl} alt={thisProductData.name} /> */}

            {/* <div className='colorSwitcher flex'>
              {currentClothPhotos.map((photo, photoIndex) => (
                <div key={photoIndex} className={`rectangle ${currentPhoto === photoIndex ? 'active' : ''}`} onClick={() => handleSwitch(photoIndex)}></div>
              ))}
            </div> */}
            {/* <ProductCarousel key={thisProductData.id} currentClothPhotos={currentClothPhotos}
            name={thisProductData.name}/> */}
            <ProductCarousel
              key={thisProductData.id}
              currentClothPhotos={currentClothPhotos}
              name={thisProductData.name}
              currentPhoto={currentPhoto}
              setCurrentPhoto={setCurrentPhoto}
            />


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
                colorsNames.map((name, index) => (
                  <li
                    ref={index === 0 ? firstLiRef : null}
                    style={{ backgroundColor: colorsObj[name] }}
                    key={name} title={name}
                    data-data-color={name}
                    className="product__options-colorBtn"
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
            if (item.category === thisProductData.category && item.id !== thisProductData.id) return <Card key={item.id} {...item} />
          })
        }
      </div>

    </div>
  );
};

export default Product;