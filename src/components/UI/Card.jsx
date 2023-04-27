import React, { useEffect } from 'react';
import Item from '../../images/cards-img/classic-cotton-raincoat-1.jpg';
import {Link} from "react-router-dom";
import ArrowOnAProduct from '../../images/cards-img/arrowOnAProduct.svg';

import {useState, memo} from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const Card = memo((props) => {

  const {name, mainImage, id, price, description, category, size, color} = props;
  // console.log(mainImage);

  const [firstColorImg, setFirstColorImg] = useState();

  useEffect(() => {
    if(!color) return
    setFirstColorImg(Object.values(color)[0][0]);
  }, [color]);
  // console.log(firstColorImg);

  const storage = getStorage();
  const imgRef = ref(storage, `${firstColorImg}`);

  const [imgUrl, setImgUrl] = useState('');

  getDownloadURL(imgRef)
    .then((url) => {

      setImgUrl(url);

    })
    .catch((error) => {

      console.log(error);

    });

    // const [data, setData] = useState({
    //   name: `${name}`,
    //   mainImage: `${mainImage}`,
    //   imgUrl: `${imgUrl}`,
    //   description: `${description}`,
    //   category: `${category}`,
    //   price: `${price}`,
    //   size: `${size}`,
    //   color: color,
    // });

  // console.log(mainImage);
  // console.log(imgRef);
  return (
    <div className="cards__card flex-column">

      <Link className="cards__image-wrapper imgLink" to={`/shop/${category}/${id}`}>

        <img src={mainImage ? imgUrl : Item}/>

        <span className={"mask"}>
          <img src={ArrowOnAProduct} alt="Arrow On A Product"/>
        </span>

      </Link>
      <h4 className="cards__headline">{name}</h4>
      <p className="cards__price">{price} грн</p>

    </div>
  );
});

export default Card;