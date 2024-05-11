
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Container } from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './Slider.css'; 
function Slide() {
  return (
    <Container sx={{py:5}}>
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination,  A11y]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <HoveredImage
              src="src/assets/images/bicycle-4.jpg"
              alt="Bicycle Image 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HoveredImage
              src="src/assets/images/bicycle-5.jpg"
              alt="Bicycle Image 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HoveredImage
              src="src/assets/images/bicycle-7.jpg"
              alt="Bicycle Image 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HoveredImage
              src="src/assets/images/bicycle-1.jpg"
              alt="Bicycle Image 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HoveredImage
              src="src/assets/images/specification-2.jpg"
              alt="Bicycle Image 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HoveredImage
              src="src/assets/images/specification-3.jpg"
              alt="Bicycle Image 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HoveredImage
              src="src/assets/images/specification-5.jpg"
              alt="Bicycle Image 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HoveredImage
              src="src/assets/images/specification-4.jpg"
              alt="Bicycle Image 4"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}

const HoveredImage = ({ src, alt }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const { transform } = useSpring({
    transform: `rotateY(${isHovered ? 180 : 0}deg)`,
    config: { duration: 500 }
  });

  return (
    <animated.img
      src={src}
      alt={alt}
      className="slide-img"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform }}
    />
  );
};

export default Slide;
