import React, { useState, useEffect, useRef } from 'react';
import ListOfCard from './ListCard';
import styles from './carousel.module.scss';

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLeftButtonVisible, setIsLeftButtonVisible] = useState(false);
  const [isRightButtonVisible, setIsRightButtonVisible] = useState(true);
  const carouselRef = useRef(null);

  const { current: carouselElement } = carouselRef;

  const cardWidth = 275;
  const gap = 20;

  const handleScroll = () => {
    if (carouselElement) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselElement;
      const maxScrollLeft = scrollWidth - clientWidth;
      setIsLeftButtonVisible(scrollLeft > 0);
      setIsRightButtonVisible(scrollLeft < maxScrollLeft);
    }
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    handleScroll(); // 초기 로드 시 스크롤 위치를 확인하여 버튼 가시성 업데이트
    if (carouselElement) {
      carouselElement.addEventListener('scroll', handleScroll);
      return () => {
        carouselElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, [carouselElement]);

  const slideTo = index => {
    setCurrentIndex(index);
    if (carouselRef.current) {
      const newScrollLeft = (cardWidth + gap) * index;
      carouselRef.current.scrollLeft = newScrollLeft;
    }
  };

  const calculateVisibleCards = () => {
    const wrapperWidth = carouselElement.clientWidth; // 캐러셀 래퍼의 현재 너비
    const cardWidthWithGap = cardWidth + gap; // 카드 너비 + 간격
    return Math.floor(wrapperWidth / cardWidthWithGap); // 한 번에 보여지는 카드의 수
  };

  const handlePrevClick = () => {
    const cardsToSlide = calculateVisibleCards();
    const newIndex = Math.max(currentIndex - cardsToSlide, 0);
    slideTo(newIndex);
  };

  const handleNextClick = () => {
    const cardsToSlide = calculateVisibleCards();
    const newIndex = Math.min(
      currentIndex + cardsToSlide,
      cards.length - cardsToSlide,
    );
    slideTo(newIndex);
  };

  return (
    <div className={styles.carouselContainer}>
      {isLeftButtonVisible && (
        <button
          type="button"
          className={styles.prevButton}
          onClick={handlePrevClick}
        >
          <span>{'<'}</span>
        </button>
      )}
      <div
        className={styles.carouselWrapper}
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={styles.card}
            style={{
              marginRight: index !== cards.length - 1 ? `${gap}px` : 0,
            }}
          >
            <ListOfCard recipient={card} />
          </div>
        ))}
      </div>
      {isRightButtonVisible && (
        <button
          type="button"
          className={styles.nextButton}
          onClick={handleNextClick}
        >
          <span>{'>'}</span>
        </button>
      )}
    </div>
  );
};

export default Carousel;
