// import React from "react";

const Cards = ({ title, desc, url }) => {
  return (
    <div className="px-8 py-8 ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={url} alt="Shoes" className="rounded-xl " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions ">
            <button className="btn btn-primary mx-32">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
