import { A11y, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataCategory } from "../utils/data";
import Background from "../assets/img/ImageHero.png";
import {GrFormPrevious, GrFormNext} from "react-icons/gr"

import "swiper/css";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";

register();

function CategoryComponent() {
  return (
    <div className="container mt-5 pt-5">
      <h1 className="fw-bold">Browser Our Category</h1>
      <h2 className="fw-semibold main-color mb-5">Receipt</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView="auto"
       
      >
        {dataCategory.map((item, index) => (
          
            <SwiperSlide
            key={index}
            className={`res-slide mb-5 position-relative      `}
          ><a href="#" className={`text-black w-100  d-flex align-items-center gap-2 text-decoration-none rounded-4 ${item.color} flex-column shadow`}>
            <img className="icon-img pt-3 mt-3" src={item.image} alt="" />
            <img
              className="position-absolute top-0 bg start-0 rounded-4 opacity-0"
              src={Background}
              alt=""
            />
            <p className="fw-semibold">{item.name}</p>
            <p className="mb-4">{item.value} items</p></a>
          </SwiperSlide>
          
            
          
          
        ))}

        <SwiperNavButtons />
      </Swiper>
    </div>
  );
}

export default CategoryComponent;

import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns  align-items-end justify-content-end  d-flex gap-4">
      <button
        className="border-0 px-3 fs-4 py-1 d-flex align-items-center gap-2 rounded-4 main-color-bg text-white shadow main-color-bg text-white"
        onClick={() => swiper.slidePrev()}
      >
        <GrFormPrevious className="categoryicon" /> PREV
      </button>
      <button
        className="border-0 px-3 py-1 fs-4 d-flex align-items-center gap-2 rounded-4 main-color-bg text-white shadow main-color-bg text-white"
        onClick={() => swiper.slideNext()}
      >
        NEXT <GrFormNext className="categoryicon" />
      </button>
    </div>
  );
};
