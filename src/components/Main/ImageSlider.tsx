import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
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

const StyledPagination = styled.div`
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
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
    transition: background 0.3s; // Добавим плавный переход для фона
  }

  .swiper-pagination-bullet-active {
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
  }

  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 10px);
  }
`;


const ImageSlider = () => {
  // Массив изображений
  const IMAGE = [
    {
      url: "../../src/assets/hero-pic-1920-2.png",
      name: "фото высотное офисное здание",
    },
    {
      url: "../../src/assets/hero-pic-1920-3.png",
      name: "фото здание со стеклянными балконами",
    },
    {
      url: "../../src/assets/low-angle-photo-of-balconies.png",
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
        <StyledPagination className="swiper-pagination" />
      </StyledSwiper>
    </>
  );
};

export default ImageSlider;
