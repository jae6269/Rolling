import React, { useState, useEffect, useRef } from 'react';
import ListOfCard from './ListOfCard';
import styles from './carousel.module.scss';
import CardSkeleton from './CardSkeleton';

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLeftButtonVisible, setIsLeftButtonVisible] = useState(false);
  const [isRightButtonVisible, setIsRightButtonVisible] = useState(true);
  const carouselRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const { current: carouselElement } = carouselRef;

  const cardWidth = 275;
  const gap = 20;

  // 스크롤 이벤트
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
    handleScroll();
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

  // 카드 수 계산 (로딩 완료 후에만 실행)
  const calculateVisibleCards = () => {
    if (carouselElement) {
      // 캐러셀 요소가 존재하는 경우에만 계산
      const wrapperWidth = carouselElement.clientWidth;
      const cardWidthWithGap = cardWidth + gap;
      return Math.floor(wrapperWidth / cardWidthWithGap);
    }
    return 0; // 로딩 중이거나 캐러셀 요소가 없는 경우 0 반환
  };

  // 버튼누르면 보이는 카드 갯수만큼 넘어가도록 수정
  const handlePrevClick = () => {
    const cardsToSlide = calculateVisibleCards();
    const newIndex = Math.max(currentIndex - cardsToSlide, 0);
    slideTo(newIndex);
  };

  // 버튼누르면 보이는 카드 갯수만큼 넘어가도록 수정
  const handleNextClick = () => {
    const cardsToSlide = calculateVisibleCards();
    const newIndex = Math.min(
      currentIndex + cardsToSlide,
      cards.length - cardsToSlide,
    );
    slideTo(newIndex);
  };

  // 데이터 로딩 및 스켈레톤 처리 이펙트
  useEffect(() => {
    const simulateLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(simulateLoading);
  }, []);

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
        {/* eslint-disable-next-line no-nested-ternary */}
        {isLoading ? (
          Array(6)
            .fill(null)
            .map((_, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={`skeleton-${index}`}
                style={{
                  marginRight: index !== cards.length - 1 ? `${gap}px` : 0,
                }}
              >
                <CardSkeleton />
              </div>
            ))
        ) : cards.length === 0 ? (
          <p>No cards to display.</p>
        ) : (
          cards.map((card, index) => (
            <div
              key={card.id}
              className={styles.card}
              style={{
                marginRight: index !== cards.length - 1 ? `${gap}px` : 0,
              }}
            >
              <ListOfCard recipient={card} />
            </div>
          ))
        )}
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
