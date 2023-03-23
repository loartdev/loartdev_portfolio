import React from 'react';
import { PropTypes } from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// MasonryBox component
const MasonryBox = ({ wallSrc, alt }) => {
  return (
    <div className="my-masonry">
      <GatsbyImage image={getImage(wallSrc)} style={{ width: "100%" }} alt={alt} />

    </div>
  )
}

// validate MasonryBox component
MasonryBox.propTypes = {
  wallSrc: PropTypes.string.isRequired,
  userProf: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userJob: PropTypes.string.isRequired,
}

export default MasonryBox