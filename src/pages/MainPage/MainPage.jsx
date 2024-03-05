import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header/index';
import {
  mainFirstArticleImg,
  mainSecondArticleImg,
} from '../../utils/imageImport';
import styles from './mainPage.module.scss';

function MainPage() {
  return (
    <>
      <nav>
        <Header buttonOn />
      </nav>
      <main className={styles.mainPage}>
        <article className={styles.firstArticle}>
          <div className={styles.textArea}>
            <span className={styles.point}>Point. 01</span>
            <h2 className={styles.title}>
              누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요
            </h2>
            <p className={styles.description}>로그인 없이 자유롭게 만들어요.</p>
          </div>
          <div className={styles.firstImgArea}>
            <img
              className={styles.mainImg}
              src={mainFirstArticleImg}
              alt="Anyone can easily make rolling paper"
            />
          </div>
        </article>
        <article className={styles.secondArticle}>
          <div className={styles.secondImgArea}>
            <img
              className={styles.mainImg}
              src={mainSecondArticleImg}
              alt="Anyone can easily make rolling paper"
            />
          </div>
          <div className={styles.textArea}>
            <span className={styles.point}>Point. 02</span>
            <h2 className={styles.title}>
              서로에게 이모지로 감정을 표현해보세요
            </h2>
            <p className={styles.description}>
              롤링 페이퍼에 이모지를 추가할 수 있어요.
            </p>
          </div>
        </article>
        <div className={styles.buttonArea}>
          <Link to="/list">
            <button type="button" className={styles.toListBtn}>
              구경해보기
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
export default MainPage;
