import React from "react";
import Fade from 'react-reveal/Fade';
import Masonry from "react-masonry-css"
import MasonryBox from './MasonryBox/MasonryBox';
import MasonryCard from "./masonryCards";

// MasonryLayout Component
const MasonryLayout = ({ images, dontbreak }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={dontbreak ? { default: 4 } : breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map(item => (
        <Fade key={item.id} bottom big>
          <MasonryBox
            wallSrc={item.src}
            alt={item.title}
          />
        </Fade>
      ))}
    </Masonry>
  )
}

export default MasonryLayout

export const ArtMasonryLayout = ({ images, dontbreak }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={dontbreak ? { default: 4 } : breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map(item => (
        <Fade key={item.id} bottom big>
          <MasonryCard DATA={item} />
        </Fade>
      ))}
    </Masonry>
  )
}
