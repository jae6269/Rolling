// card carousel
import React from 'react';
import Slider from 'react-slick';
import ListOfCard from '../../../components/CardList/ListCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from './Arrow';

const CardCarousel = ({ cards }) => {
  const settings = {
    dots: false, // 아래 점들을 표시할지 여부
    infinite: false, // 무한 스크롤 여부
    speed: 500,
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한 번에 넘길 슬라이드 수
    variableWidth: true, // 다양한 너비의 슬라이드를 지원
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // 태블릿과 모바일에 대한 설정
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true, // 스와이프 기능 활성화
          variableWidth: false, // 슬라이드 너비 고정
        },
      },
    ],
  };

  // return (
  //   <div className={styles.carousel}>
  //     <Slider {...settings}>
  //       {cards.map(card => (
  //         <div key={card.id} style={{ width: 275, margin: '0 10px' }}>
  //           {' '}
  //           {/* 20px 간격을 위해 좌우 마진을 10px씩 줍니다. */}
  //           <ListOfCard recipient={card} />
  //         </div>
  //       ))}
  //     </Slider>
  //   </div>
  // );
};

export default CardCarousel;
