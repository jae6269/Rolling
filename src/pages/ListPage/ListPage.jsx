import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Carousel from '../../components/CardList/Carousel';
import useFetchData from '../../hooks/useFetchData';
import { LIST_URL, SORT_LIKE, POST_BASE_URL } from '../../constants/fetchUrl';
import styles from './listPage.module.scss';
import Search from '../../components/Search';
import Button from '../../components/common/Button/Button';

function ListPage() {
  const popularDataURL = `${LIST_URL}${SORT_LIKE}`;
  const newestDataURL = `${LIST_URL}`;

  const [deletedCards, setDeletedCards] = useState([]);

  const popularRecipientsData = useFetchData(popularDataURL);
  const newestRecipientsData = useFetchData(newestDataURL);
  const searchRecipientsData = useFetchData(`${POST_BASE_URL}/?limit=50`);

  const getValidRecipients = recipientsData =>
    recipientsData && recipientsData.results
      ? recipientsData.results.filter(card => !deletedCards.includes(card.id))
      : [];

  const popularRecipients = getValidRecipients(popularRecipientsData);
  const newestRecipients = getValidRecipients(newestRecipientsData);
  const searchRecipients = getValidRecipients(searchRecipientsData);

  useEffect(() => {
    // 리스트가 새로고침될 때마다 삭제된 카드를 초기화
    setDeletedCards([]);
  }, []);

  const handleCardDelete = cardId => {
    setDeletedCards(prevDeletedCards => [...prevDeletedCards, cardId]);
  };

  return (
    <>
      <nav>
        <Header buttonOn />
      </nav>
      <main className={styles.mainContainer}>
        <div className={styles.articleContainer}>
          <div className={styles.searchContainer}>
            <Search data={searchRecipients} />
          </div>
          <div>
            <h2 className={styles.listTitle}>인기 롤링 페이퍼 🔥</h2>
            <Carousel cards={popularRecipients} onDelete={handleCardDelete} />
          </div>
          <div>
            <h2 className={styles.listTitle}>최근에 만든 롤링 페이퍼 ⭐️️</h2>
            <Carousel cards={newestRecipients} onDelete={handleCardDelete} />
          </div>
        </div>
      </main>
      <div className={styles.buttonArea}>
        <Link to="/post">
          <Button buttonStyle="primary" buttonHeight={56} main>
            나도 만들어보기
          </Button>
        </Link>
      </div>
    </>
  );
}

export default ListPage;
