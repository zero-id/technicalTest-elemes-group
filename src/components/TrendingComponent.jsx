import React from "react";
import { dataTrending } from "../utils/data";
import Background from "../assets/img/ImageHero.png";

export default function TrendingComponent() {
  return (
    <div className="container mt-5">
      <h1 className="pt-5 fw-bold">Brouser Our Trending</h1>
      <h2 className="main-color fw-semibold">Receipt</h2>
      <div class="row m-auto row-cols-1 row-cols-md-4 g-4">
        {dataTrending.map((item, index) => (
          <a href="#" className="text-decoration-none">
            <div key={index} class="col col-trending">
            <div class={`shadow border-0 card position-relative ${item.color}`}>
              <img
                src={Background}
                className="position-absolute bg-trending h-100 object-fit-cover opacity-0"
                width="100%"
                alt=""
              />
              <div class="card-body ">
                <img src={item.image} alt="" />
                <h5 class="card-title mt-3">{item.name}</h5>
                <p class="card-text main-color">{item.category}</p>
                <img width={80} src={item.rating} alt="" />
              </div>
            </div>
          </div>
          </a>
          
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-center my-5 pb-5">
        <a href="#" className="border-0 text-decoration-none px-4 py-3 fs-6 d-flex rounded-4 main-color-bg text-white shadow main-color-bg text-white">
          ALL Receipt
        </a>
      </div>
    </div>
  );
}
