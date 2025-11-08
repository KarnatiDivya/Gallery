import React from "react";

const ImageCard = ({ title, imgSrc }) => {
  return (
    <>
      <div className="image-card">
        <img src={imgSrc} alt={title} width="250" height="180" />
        <h3>{title}</h3>
      </div>
    </>
  );
};

export default ImageCard;
