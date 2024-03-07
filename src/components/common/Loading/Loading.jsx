import React from 'react';
import styles from './loading.module.scss';
import Spinner from '../../../assets/loadingSpinner.gif';

function Loading() {
  return (
    <div className={styles.loadingBackground}>
      <p className={styles.loadingText}>로딩중입니다 !</p>
      <img className={styles.loadingSpinner} src={Spinner} alt="spinner" />
    </div>
  );
}

export default Loading;
