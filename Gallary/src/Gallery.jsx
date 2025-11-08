import React from "react";
import ImageCard from "./ImageCard"; 

const Gallery = () => {
  const images = [
    { id: 1, title: "Nature View", imgSrc: "/nature.png" },
    { id: 2, title: "Flower Garden", imgSrc: "/flower.png" },
    { id: 3, title: "Mountain Peak", imgSrc: "/mounitain.png" },
  ];

  return (
    <div className="gallery">
      {images.map((item) => (
        <ImageCard key={item.id} title={item.title} imgSrc={item.imgSrc} />
      ))}
    </div>
  );
};

export default Gallery;
