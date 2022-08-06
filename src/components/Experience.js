import { React, useRef, useCallback } from "react";
import arrowLeft from "../assets/general/arrow_left.svg";
import arrowRight from "../assets/general/arrow_right.svg";

import Neemo from "../assets/home/experience/neemo.svg";
import StarWars from "../assets/home/experience/starwars.svg";
import ToyStory from "../assets/home/experience/experience-toy-story.png";
import Emporea from "../assets/home/experience/experience-emporea.png";
import TrainStation from "../assets/home/experience/experience-train-station.png";
import SwiperCore, { Autoplay } from "swiper";
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

SwiperCore.use([Autoplay]);
const Experience = () => {
    const pastExps = [
        { image: Neemo, title: "Neemo's Reef", description: "" },
        { image: ToyStory, title: "Toy Story: Smash It!", description: "" },
        { image: StarWars, title: "Star Wars: Assault Team", description: "" },
        { image: Emporea, title: "Emporea", description: "" },
        { image: TrainStation, title: "Trainstation 2", description: "" },
    ];
    
    const sliderRef = useRef(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);
    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

  return (
    <div className="tw-flex tw-flex-col tw-w-full tw-px-8 lg:tw-px-30 tw-py-12 lg:tw-py-22 tw-bg-gray-100">
      <div className="tw-flex tw-w-full tw-justify-between tw-items-center tw-mg-4 lg:tw-mb-13">
        <h2 className="tw-font-inter tw-font-bold tw-text-3xl lg:tw-text-heading tw-text-black tw-tracking-tightest">
          Past Experience
        </h2>
        <div className="tw-flex navIcons">
          <div
            className="navButton harbor-btn-prev tw-bg-buttongrey hover:tw-bg-gradient-to-br hover:tw-from-dark-blue hover:tw-to-light-blue"
            onClick={handlePrev}
          >
            <img src={arrowLeft} alt="arrow left" className="tw--ml-1 tw-h-3 lg:tw-h-6" />
          </div>
          <div
            className="navButton harbor-btn-next tw-ml-2.5 tw-bg-buttongrey hover:tw-bg-gradient-to-br hover:tw-from-dark-blue hover:tw-to-light-blue"
            onClick={handleNext}
          >
            <img src={arrowRight} alt="arrow right" className="tw-ml-1 tw-h-3 lg:tw-h-6" />
          </div>
        </div>
      </div>
      <div className="tw-flex lg:tw-hidden">
        <Swiper
          ref={sliderRef}
          className="tw-flex-col"
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {pastExps.map((exp, index) => {
            return (
              <SwiperSlide
                key={index}
                className="tw-w-52.5 tw-flex-col tw-bg-white tw-rounded-xl"
              >
                <img src={exp.image} alt="" className="tw-w-52.5" />
                <div key={index} className="tw-flex-col">
                  <p className="tw-mb-0 tw-px-6 tw-text-left tw-font-bold tw-font-inter tw-py-2.5 ">
                    {exp.title}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="tw-hidden lg:tw-flex">
        <Swiper
          ref={sliderRef}
          className="tw-flex-col"
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {pastExps.map((exp, index) => {
            return (
              <SwiperSlide
                key={index}
                className="tw-w-52.5 tw-flex-col tw-bg-white tw-rounded-xl"
              >
                <img src={exp.image} alt="" className="tw-w-52.5" />
                <div key={index} className="tw-flex-col">
                  <p className="tw-mb-0 tw-px-6 tw-text-left tw-font-bold tw-font-inter tw-py-2.5 ">
                    {exp.title}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Experience;
