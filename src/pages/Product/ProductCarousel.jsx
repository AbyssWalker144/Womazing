import React, { useState, useEffect } from 'react';
import { Blocks } from 'react-loader-spinner';

const ProductCarousel = ({ currentClothPhotos, name, currentPhoto, setCurrentPhoto }) => {
  // const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [currentClothPhotos]);

  useEffect(() => {
    if (currentClothPhotos.length > 0) {
      setIsLoading(false);
    }
  }, [currentClothPhotos]);

  const handleSwitch = (colorIndex) => {
    setCurrentPhoto(colorIndex);
  };

  useEffect(() => {
    console.log(currentClothPhotos);
    console.log(currentClothPhotos[0]);
  }, [currentClothPhotos]);

  return (
    <>
      {isLoading ? (
        <Blocks
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="spinner"
        />
      ) : (
        <>
          <img src={currentClothPhotos[currentPhoto]} alt={name} />

          <div className='photoSwitcher flex'>
            {Array.isArray(currentClothPhotos) && currentClothPhotos?.map((photo, photoIndex) => (
              <div
                key={photoIndex}
                className={`rectangle ${currentPhoto === photoIndex ? 'active' : ''}`}
                onClick={() => handleSwitch(photoIndex)}
              ></div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ProductCarousel;