import React from 'react';
import Item from '../../images/cards-img/classic-cotton-raincoat-1.jpg';
import {Link} from "react-router-dom";
import ArrowOnAProduct from '../../images/cards-img/arrowOnAProduct.svg';

import {useState} from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const Card = (props) => {

  const {name, mainImage, id, price, description, category, size, color} = props;
  // console.log(mainImage);

  const storage = getStorage();
  const imgRef = ref(storage, `${mainImage}`);

  const [imgUrl, setImgUrl] = useState('');

  getDownloadURL(imgRef)
    .then((url) => {

      setImgUrl(url);

    })
    .catch((error) => {

      // Handle any errors

    });

    const [data, setData] = useState({
      name: `${name}`,
      mainImage: `${mainImage}`,
      imgUrl: `${imgUrl}`,
      description: `${description}`,
      category: `${category}`,
      price: `${price}`,
      size: `${size}`,
      color: color,
    });

  // console.log(mainImage);
  // console.log(imgRef);
  return (
    <div className="cards__card flex-column">

      <Link state={{ data: data }} className="cards__image-wrapper imgLink" to={`/product/${id}`}>

        <img src={mainImage ? imgUrl : Item}/>

        <span className={"mask"}>
          <img src={ArrowOnAProduct} alt="Arrow On A Product"/>
        </span>

      </Link>
      <h4 className="cards__headline">{name}</h4>
      <p className="cards__price">{price} грн</p>

    </div>
  );
};

export default Card;