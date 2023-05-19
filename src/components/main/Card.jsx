import React from "react";

const Card = (data) => {
  console.log(data);
  const { title, desc, image } = data;
  return (
    <div className="cardContainer">
      <div className="title">
        <h1>{title} </h1>
      </div>
      <img src={image} alt="" />
      <div className="parag">
        <p>{desc} </p>
      </div>
    </div>
  );
};

export default Card;
