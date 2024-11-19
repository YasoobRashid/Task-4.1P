import React from 'react';
import './ImageBanner.css';

const ImageBanner = () => (
  <div className="image-banner">
    <img
      src={`https://picsum.photos/800/300?random=${Math.random()}`}
      alt="Featured Banner"
      className="image-banner-img"
    />
  </div>
);

export default ImageBanner;
