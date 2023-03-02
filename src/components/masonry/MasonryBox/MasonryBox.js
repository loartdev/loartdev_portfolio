import React from 'react';
import { PropTypes } from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// MasonryBox component
const MasonryBox = ({ wallSrc, userProf, userName, userJob }) => {
  return (
    <div className="my-masonry">
      <GatsbyImage image={getImage(wallSrc)} style={{ width: "100%" }} alt="" />
      <div className="my-masnry-description flex">
        <div className="my-masnry-user-box flex align-items-center">
          <div className="my-masnry-user-prof">
            <GatsbyImage image={getImage(userProf)} alt='' />
          </div>
          <div className="my-masnry-user-prof-desc flex flex-column">
            <h1>{userName}</h1>
            <h3>{userJob}</h3>
          </div>
        </div>
      </div>
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