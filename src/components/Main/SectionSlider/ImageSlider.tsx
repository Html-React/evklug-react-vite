import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 620px;
  border-radius: 10px;

  .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 20px;
  }

  .swiper-pagination-bullet {
    width: var(
      --swiper-pagination-bullet-width,
      var(--swiper-pagination-bullet-size, 15px)
    );
    height: var(
      --swiper-pagination-bullet-height,
      var(--swiper-pagination-bullet-size, 15px)
    );
    background: var(
      --swiper-pagination-bullet-inactive-color,
      rgba(255, 255, 255, 0.4)
    );
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 1);
  }

  .swiper-pagination-bullet-active {
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
  }

  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 10px);
  }

  @media (max-width: 1025px) {
    width: 100%;
    height: 668px;
  }

  @media (max-width: 490px) {
    height: 510px;
  }

  @media (max-width: 430px) {
    height: 308px;
    .swiper-pagination-bullet {
        width: var(
          --swiper-pagination-bullet-width,
          var(--swiper-pagination-bullet-size, 10px)
        );
        height: var(
          --swiper-pagination-bullet-height,
          var(--swiper-pagination-bullet-size, 10px)
        );
    }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Центрируем текст и элементы внутри слайда */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageSlider = () => {
  // Массив изображений
  const IMAGE = [
    {
      url: "../../src/assets/pic_1.png",
      name: "фото здание со стеклянными балконами",
    },
    {
      url: "../../src/assets/pic_2.png",
      name: "фото высотное офисное здание",
    },
    {
      url: "../../src/assets/pic_3.png",
      name: "фото здание со стеклянными лоджиями",
    },
  ];

  // Генерация списка слайдов
  const ImageList = IMAGE.map((item, index) => (
    <StyledSwiperSlide key={index}>
      <img src={item.url} alt={item.name} />
    </StyledSwiperSlide>
  ));

  return (
    <>      
      <StyledSwiper
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
      >
        {ImageList}        
      </StyledSwiper>
    </>
  );
};

export default ImageSlider;
