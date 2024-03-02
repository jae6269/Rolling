// card carousel

import React from 'react';
import Slider from 'react-slick';
import ListOfCard from '../../../components/CardList/ListCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardCarousel = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    // 화살표 컴포넌트 추가
    // nextArrow: <YourNextArrow />,
    // prevArrow: <YourPrevArrow />,
    responsive: [
      {
        breakpoint: 768, // 태블릿과 모바일에 대한 설정
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {cards.map(card => (
          <div key={card.id} style={{ width: 275, margin: '0 10px' }}>
            {' '}
            {/* 20px 간격을 위해 좌우 마진을 10px씩 줍니다. */}
            <ListOfCard recipient={card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
