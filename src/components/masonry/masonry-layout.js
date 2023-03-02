import React from "react";
import Fade from 'react-reveal/Fade';
import Masonry from "react-masonry-css"
import MasonryBox from './MasonryBox/MasonryBox';

// MasonryLayout Component
const MasonryLayout = ({ images }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map(item => (
        <Fade key={item.id} bottom big>
          <MasonryBox
            wallSrc={item.src}
            userProf={item.user.src}
            userName={item.user.name}
            userJob={item.user.job}
          />
        </Fade>
      ))}
    </Masonry>
  )
}

export default MasonryLayout