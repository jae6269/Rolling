import React from 'react';
import classNames from 'classnames';
import './card.scss';
import formatCardCreatedDate from '../../../utils/formatDataFunctions';
import RelationBadge from '../badge/RelationBadge ';
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
  const containerClasses = classNames('card-container', {
    [`font-${font}`]: font, // font prop에 따라 클래스를 동적으로 추가
  });

  const handleModalOpen = e => {
    e.preventDefault();
    console.log('클릭하면 모달 창 띄우기');
  };

  return (
    <button
      type="button"
      className={containerClasses}
      onClick={handleModalOpen}
    >
      <Profile
        profileImageURL={profileImageURL}
        sender={sender}
        relationship={relationship}
      />

      <div className="separate-line" />
      <p className="text">{content}</p>
      <p className="date">{date}</p>
    </button>
  );
}

export default Card;
