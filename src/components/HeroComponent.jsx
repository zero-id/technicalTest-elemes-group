import React from "react";
import HeroImage from "../assets/img/HeroImage.png";
import Rating from "../assets/img/rating.png";

export default function HeroComponent() {
  return (
    <section className="position-relative" id="hero">
      <div className="herobackground position-absolute z-n1 start-0 top-0 bottom-0 end-0"></div>
      <div className="container mt-5 pt-5">
        <div className="row d-flex align-items-center">
          <div className="col">
            <h1 className="fw-bold h1-hero main-color">
              Good Food Us <br />
              Good Mood
            </h1>
            <div className="">
              <p>
                I would think that conserving our natural resources should be a
                conservative position: Not to waste food, and not to throw away
                a lot of the food that we buy.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="border-0 align-self-center text-decoration-none px-3 py-2 rounded-4 main-color-bg text-white shadow main-color-bg text-white">
                  Daftar Sekarng
                </a>
                <a href="#" className="border-0 align-self-center text-decoration-none px-3 py-2 rounded-4 main-color-bg text-dark shadow bg-light">
                  About Us
                </a>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-end">
            <div className="position-relative">
              <div>
                <img className="p-5" width="430px" src={HeroImage} alt="" />
              </div>
              <div
                class="card card-hero border-0 shadow position-absolute"
                style={{ width: "18rem;" }}
              >
                <div class="card-body d-flex gap-2">
                  <div style={{ width: "80px" }}>
                    <img src={HeroImage} width={70} alt="" />
                  </div>
                  <div>
                    <h5 className="m-0">Green Salad Tomato</h5>
                    <p className="text-secondary p-0 m-0">Tomato</p>
                    <img src={Rating} width={80} alt="" />
                  </div>
                </div>
              </div>
              <div className="backimage position-absolute z-n1 rounded-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
