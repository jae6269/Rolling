import React from 'react';
import Card from './ListCard';
import styles from './index.module.scss';

const CardList = ({ recipients }) => {
  // 로딩 상태나 데이터가 없는 상태를 처리
  if (!recipients || recipients.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.recipientList}>
      {recipients.map(recipient => (
        <Card
          key={recipient.id}
          recipient={recipient} // props를 객체 하나로 전달
        />
      ))}
    </div>
  );
};

export default CardList;
