import "swiper/css";
// import { dataBanks } from "./DataBanks";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Image } from "@nextui-org/react";
import { dataBanks } from "../pages/home/components/DataBanks";
const SliderBanks = () => {
  return (
    <>
      <div className="my-5"></div>
      <div className="bg-dark py-10" id="bancos">
        <div className="w-full overflow-hidden">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 8,
                spaceBetween: 5,
              },
            }}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            grabCursor={true}
            loop={true}
            speed={3000}
            modules={[Autoplay]}
          >
            <div className="">
              {dataBanks.map(({ id, image }) => (
                <SwiperSlide
                  key={id}
                  className="flex items-center slider-horizontal"
                >
                  <Image
                    src={`/assets/${image}`}
                    alt="Banco"
                    width="90"
                    height="70"
                    className="h-[70px] w-[120px] object-contain"
                  ></Image>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SliderBanks;
