import React from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';
import formatCardCreatedDate from '../../../utils/formatDataFunctions';
import Profile from '../Profile/Profile';
/*
카드 컴포넌트
props는 PostPage에서 
recentMessages 배열의 객체들을
map으로 하나씩 내려줍니다

개별 데이터 형식:
{
	"id": 32,
	"recipientId": 2,
	"sender": "김하은",
	"profileImageURL": "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
	"relationship": "가족",
	"content": "열심히 일하는 모습 멋있습니다.",
	"font": "Pretendard",
  "createdAt": "2023-11-01T08:05:25.399056Z"
}
*/
function Card({ props }) {
  const { sender, profileImageURL, relationship, content, font, createdAt } =
    props;
  const date = formatCardCreatedDate(createdAt);

  const handleModalOpen = e => {
    e.preventDefault();
    console.log('클릭하면 모달 창 띄우기');
  };

  return (
    <button
      type="button"
      className={styles.container}
      onClick={handleModalOpen}
    >
      <Profile
        profileImageURL={profileImageURL}
        sender={sender}
        relationship={relationship}
        font={font}
      />

      <hr className={styles.underline} />
      <p className={styles.text} style={{ fontFamily: font }}>
        {content}
      </p>
      <p className={styles.date} style={{ fontFamily: font }}>
        {date}
      </p>
    </button>
  );
}

export default Card;
