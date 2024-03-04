import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import MyComponent from '../../components/CardList/data';

function ListPage() {
  return (
    <>
      <nav>
        <Header buttonOn />
      </nav>
      <main>
        <div>
          <h2>인기 롤링 페이퍼 🔥</h2>
          <MyComponent />
        </div>
        <div>
          <h2>최근에 만든 롤링 페이퍼 ⭐️️</h2>
        </div>
        <button type="button">나도 만들어보기</button>
      </main>
    </>
  );
}
export default ListPage;
