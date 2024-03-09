import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Carousel from '../../components/CardList/Carousel';
import useFetchData from '../../hooks/useFetchData';
import { LIST_URL, SORT_LIKE, POST_BASE_URL } from '../../constants/fetchUrl';
import styles from './listPage.module.scss';
import Search from '../../components/Search';

function ListPage() {
  const popularDataURL = `${LIST_URL}${SORT_LIKE}`;
  const newestDataURL = `${LIST_URL}`;

  const popularRecipientsData = useFetchData(popularDataURL);
  const newestRecipientsData = useFetchData(newestDataURL);

  // recipientsData가 유효하고 results 배열이 존재하는지 확인하는 함수
  const getValidRecipients = recipientsData =>
    recipientsData && recipientsData.results ? recipientsData.results : [];

  // // count값 추출
  // const count =
  //   popularRecipientsData && popularRecipientsData.count
  //     ? popularRecipientsData.count
  //     : [];

  const searchDataURL = `${POST_BASE_URL}/?limit=50`;
  const searchRecipientsData = useFetchData(searchDataURL);

  // 데이터 가져오기
  const popularRecipients = getValidRecipients(popularRecipientsData);
  const newestRecipients = getValidRecipients(newestRecipientsData);
  const searchRecipients = getValidRecipients(searchRecipientsData);

  return (
    <>
      <nav>
        <Header buttonOn />
      </nav>
      <main className={styles.mainContainer}>
        <Search data={searchRecipients} />
        <div className={styles.articleContainer}>
          <div>
            <h2 className={styles.listTitle}>인기 롤링 페이퍼 🔥</h2>
            <Carousel cards={popularRecipients} />
          </div>
          <div>
            <h2 className={styles.listTitle}>최근에 만든 롤링 페이퍼 ⭐️️</h2>
            <Carousel cards={newestRecipients} />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/post">
            <button className={styles.linkButton} type="button">
              나도 만들어보기
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default ListPage;
