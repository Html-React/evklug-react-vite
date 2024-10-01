import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../style/header/ImageSlider.css";



import { Autoplay, Pagination } from "swiper/modules";

export function ImageSlider() {

  const IMAGE = [
    {
      url: "../../src/assets/img/hero-pic-1920-2.png",
      name: "фото высотное офисное здание",
    },
    {
      url: ".../../src/assets/img/hero-pic-1920-3.png",
      name: "фото здание со стеклянными балконами",
    },
    {
      url: "../../src/assets/img/low-angle-photo-of-balconies.png",
      name: "фото здание со стеклянными лоджиями",
    },
  ];

  const ImageList = IMAGE.map((item, index) => (
    <SwiperSlide key={index}>
      <img src={item.url} alt={item.name}></img>
    </SwiperSlide>
  ));


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {ImageList} 
      </Swiper>
    </>
  );
}