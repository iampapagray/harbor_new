import { React, useRef, useCallback } from "react";
import clsx from "clsx";
import Char1 from '../assets/home/char1.svg';
import Char2 from '../assets/home/char2.svg';
import Char3 from '../assets/home/char3.svg';
import Char4 from '../assets/home/char4.svg';
import Char5 from '../assets/home/char5.svg';
import SwiperCore, { Autoplay } from "swiper";
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";


function Blockchain(props) {

    const characters = [
      { image: Char1, animate: "tw-animate-float-1" },
      { image: Char2, animate: "tw-animate-float-2" },
      { image: Char3, animate: "tw-animate-float-3" },
      { image: Char4, animate: "tw-animate-float-4" },
      { image: Char5, animate: "tw-animate-float-5" },
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
      <div className="tw-flex tw-flex-col tw-w-full tw-bg-gray-100 tw-py-12 lg:tw-py-16 2xl:tw-py-22 tw-px-8 lg:tw-px-16 2xl:tw-px-30">
        <h3 className="tw-font-inter tw-font-bold tw-text-2xl lg:tw-text-4xl l2xlg:tw-text-heading tw-mx-0 lg:tw-mx-40 2xl:tw-mx-80 tw-tracking-tightest">We are creating blockchain games for the masses</h3>
        <div
          className="tw-flex md:tw-hidden tw-px-0 2xl:tw-px-10 tw-justify-between tw-items-center tw-gap-4 2xl:tw-gap-8 tw-bg-white tw-w-full tw-h-61 2xl:tw-h-72 tw-mt-7.5 tw-rounded-3xl"
        >
          <Swiper
            ref={sliderRef}
            className="tw-px-0"
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {characters.map((character, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className=""
                  >
                    <img
                      key={index}
                      src={character.image}
                      alt={index}
                      className={clsx(
                        "tw-px-auto tw-mx-auto tw-h-48 tw-transition-transform",
                        character.animate
                      )}
                    />
                  </SwiperSlide>
                );
            })}
          </Swiper>
        </div>

        <div
          className="tw-hidden md:tw-flex tw-px-8 lg:tw-px-10 2xl:tw-px-10 tw-justify-between tw-items-center tw-gap-4 2xl:tw-gap-8 tw-bg-white tw-w-full tw-h-61 2xl:tw-h-72 tw-mt-7.5 tw-rounded-3xl"
        >
            {characters.map((character, index) => {
                return (
                  <img
                    key={index}
                    src={character.image}
                    alt={index}
                    className={clsx(
                      "tw-h-48 lg:tw-h-40 2xl:tw-h-64 tw-transition-transform",
                      character.animate
                    )}
                  />
                );
            })}
        </div>
      </div>
    );
}

export default Blockchain;