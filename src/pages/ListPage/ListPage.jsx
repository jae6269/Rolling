import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Carousel from '../../components/CardList/Carousel';
import useFetchData from '../../hooks/useFetchData';
import { listUrl, SORT_LIKE } from '../../constants/fetchUrl';
import styles from './listPage.module.scss';

function ListPage() {
  const popularDataURL = `${listUrl}${SORT_LIKE}`;
  const newestDataURL = `${listUrl}`;

  const popularRecipientsData = useFetchData(popularDataURL);
  const newestRecipientsData = useFetchData(newestDataURL);

  // recipientsData가 유효하고 results 배열이 존재하는지 확인하는 함수
  const getValidRecipients = recipientsData =>
    recipientsData && recipientsData.results ? recipientsData.results : [];

  // 데이터 가져오기
  const popularRecipients = getValidRecipients(popularRecipientsData);
  const newestRecipients = getValidRecipients(newestRecipientsData);

  return (
    <>
      <nav>
        <Header buttonOn />
      </nav>
      <main className={styles.mainContainer}>
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
          {/* Link 컴포넌트로 버튼을 감싸기 */}
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
