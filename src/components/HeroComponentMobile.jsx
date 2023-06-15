import React from "react";
import HeroImage from "../assets/img/HeroImage.png";
import Rating from "../assets/img/rating.png";

export default function HeroComponentMobile() {
  return (
    <>
      <section className="position-relative" id="hero">
      <div className="herobackground position-absolute z-n1 start-0 top-0 bottom-0 end-0"></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold h1-hero my-5 main-color px-2">
              Good Food Us <br />
              Good Mood
            </h1>
            <div className="hero-image-mobile mt-5 pt-4 position-relative">
              <div>
                <img
                  width="280px"
                  className="hero-image-mobile"
                  src={HeroImage}
                  alt=""
                />
              </div>
              <div
                class="card card-hero shadow border-0 position-absolute"
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
              <div className="mt-5 pt-5">
                <p>
                  I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
                </p>
                <div className="d-flex gap-3">
                  <button className="border-0 px-3 py-1 rounded-3 main-color-bg text-white shadow main-color-bg text-white">Daftar Sekarng</button>
                  <button className="btn btn-light shadow">About Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </section>
    </>
  );
}
