import { Rovio, Disney, Pixel, Atlassian, Hype } from '../assets/brands/'
// Import Swiper React components
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/autoplay";


SwiperCore.use([Autoplay]);
const Brands = (props) => {
    const brandImages = [Rovio, Disney, Pixel, Atlassian, Hype];

    return (
      <div className="tw-px-8 lg:tw-px-30 tw-py-12 lg:tw-py-15 tw-bg-gradient-to-br tw-from-dark-blue tw-to-light-blue">
        <div className="tw-flex tw-h-14 tw-items-center">
          {/* <div className="tw-flex tw-h-full tw-w-10 tw-bg-red-300"></div> */}
          <div className="tw-flex tw-w-full tw-h-full tw-items-center">
            <Swiper
              className="tw-flex lg:tw-hidden tw-items-center tw-h-full tw-justify-between"
              spaceBetween={50}
              slidesPerView={2}
              speed={5000}
              loop={true}
              mode={"horizontal"}
              freeMode={true}
              longSwipesMs={0}
              resistance={false}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
            >
              {brandImages.map((brand, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="tw-flex tw-h-full tw-justify-center tw-items-center"
                  >
                    <img src={brand} alt="" className="tw-items-center" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="tw-hidden lg:tw-flex tw-w-full tw-h-full tw-items-center">
            <Swiper
              className="tw-flex tw-items-center tw-h-full tw-justify-between"
              spaceBetween={50}
              slidesPerView={5}
              speed={5000}
              loop={true}
              mode={"horizontal"}
              freeMode={true}
              longSwipesMs={0}
              resistance={false}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
            >
              {brandImages.map((brand, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="tw-flex tw-h-full tw-justify-center tw-items-center"
                  >
                    <img src={brand} alt="" className="tw-items-center" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* <div className="tw-flex tw-h-full tw-w-10 tw-bg-red-300"></div> */}
        </div>
      </div>
    );
}

export default Brands