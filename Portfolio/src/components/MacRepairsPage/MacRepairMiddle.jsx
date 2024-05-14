import React from 'react';

import imageSrc from '../../assets/middle-img.avif';

const Button = ({ text }) => {

  return (
    <button className="mac-middle-button">
      {text}
    </button>
  );
};

const ImageWithButton = () => {
  const altText = "Laptop Internal View";

  return (
    <div className="mac-repair-middle">
      <img src={imageSrc} alt={altText} className="mac-repair-middle-img" />
      <Button text="Get a free diagnostic" />
    </div>
  );
};

export default ImageWithButton;