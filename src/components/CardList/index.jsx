import React from 'react';
import Card from './Card';
import styles from './index.module.scss';

const CardList = ({ recipients }) => {
  // 로딩 상태나 데이터가 없는 상태를 처리
  if (!recipients || recipients.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(recipients);

  return (
    <div className={styles.recipientList}>
      {recipients.map(recipient => (
        <Card
          key={recipient.id}
          id={recipient.id}
          name={recipient.name}
          backgroundColor={recipient.backgroundColor}
          backgroundImageURL={recipient.backgroundImageURL}
          recentMessages={recipient.recentMessages}
          messageCount={recipient.messageCount}
          topReactions={recipient.topReactions}
        />
      ))}
    </div>
  );
};

export default CardList;
