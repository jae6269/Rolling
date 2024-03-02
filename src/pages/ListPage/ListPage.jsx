import React from 'react';
import Header from '../../components/common/Header';
import CardListCarousel from './components/CardListCarousel';

function ListPage() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <div>
          <h2>인기 롤링 페이퍼 🔥</h2>
          <CardListCarousel />
        </div>
        <div>
          <h2>최근에 만든 롤링 페이퍼 ⭐️️</h2>
          <CardListCarousel />
        </div>
        <button type="button">나도 만들어보기</button>
      </main>
    </>
  );
}
export default ListPage;
