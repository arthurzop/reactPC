import React, { useEffect, useState } from "react";
import comida from "../assets/comida2.jpg";
import comida2 from "../assets/comida.jpg";
import comida3 from "../assets/comida3.jpg";
import comida4 from "../assets/comida4.jpg";
import comida5 from "../assets/comida5.jpg";

// import function to register Swiper custom elements
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slide = () => {
  
  return (
    <>
      <div className="horarios-container">
        <div className="swiper">
          <Swiper
            speed="400"
            loop={true}
            slides-per-view="1"
            className="swiper-wrapper"
            modules={[Pagination]}
            pagination={{clickable: true}}
          >
            <SwiperSlide className="swiper-slider">
              <img src={comida} />
            </SwiperSlide>
            <SwiperSlide className="swiper-slider">
              <img src={comida2} />
            </SwiperSlide>
            <SwiperSlide className="swiper-slider">
              <img src={comida3} />
            </SwiperSlide>
            <SwiperSlide className="swiper-slider">
              <img src={comida4} />
            </SwiperSlide>
            <SwiperSlide className="swiper-slider">
              <img src={comida5} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="horarios-txt">
          <h1 id="extrabold">horários</h1>
          <h3 id="light">SEG, QUA E QUI - 12h às 23h</h3>
          <h3 id="light">SEXTA E SÁBADO - 12h às 01h</h3>
          <h3 id="light">DOMINGO - 12h às 18h</h3>
          <h3 id="light">TERÇA-FEIRA - FECHADO</h3>
          
        </div>
      </div>
    </>
  );
};

export default Slide;

// register Swiper custom elements

