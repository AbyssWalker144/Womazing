import React, {Children, cloneElement, useEffect, useState} from 'react';
import '../styles/components/DreamTeamCarousel.scss';
import ArrowLeft from "../images/dreamTeamCarousel/arrowLeft.png"
import ArrowRight from "../images/dreamTeamCarousel/arrowRight.png";


const PICTURES_WIDTH = 730

const DreamTeamCarousel = ({ children }) => {
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)


  const handleLeftArrowClick = () => {
    // console.log('handleLeftArrowClick');

    setOffset((currentOffset) => {
      const newOffset = currentOffset + PICTURES_WIDTH

      // console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }

  const handleRightArrowClick = () => {
    // console.log('handleRightArrowClick');

    setOffset((currentOffset) => {

      const newOffset = currentOffset - PICTURES_WIDTH

      const maxOffset = -(PICTURES_WIDTH * (pages.length - 1))

      // console.log(newOffset, maxOffset)
      return Math.max(newOffset, maxOffset)
    })
  }

  useEffect(() => {
    setPages(
      Children.map(children, child => {
        return cloneElement(child, {
          style: {
            height: '100%',
            // minWidth: '100%',
            // maxWidth: '100%',
            minWidth: `${PICTURES_WIDTH}px`,
            maxWidth: `${PICTURES_WIDTH}px`,
          },
        })
      })
    )
  }, [])

  return (
    <div className={"carousel-main-container"}>
      <img src={ArrowLeft} alt={"arrow left"}
           className="arrow arrowLeft"
           onClick={handleLeftArrowClick}/>

      <div className={"dream-team-window"}>

        <div className={"dream-team-all-pictures"}
        style={{transform: `translateX(${offset}px)`}}>

          {pages}

        </div>

      </div>

      <img src={ArrowRight} alt={"arrow right"}
           className="arrow arrowRight"
           onClick={handleRightArrowClick}/>
    </div>
  );
};

export default DreamTeamCarousel;