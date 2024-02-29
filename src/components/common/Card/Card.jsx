import React from 'react';
import classNames from 'classnames';
import './card.scss';
import { formatCardCreatedDate } from '../../../utils/formatDataFunctions';
import RelationBadge from '../badge/RelationBadge ';
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

  return (
    <div className={containerClasses}>
      <div className="profile">
        <img className="profile-img" src={profileImageURL} alt="profileImgae" />
        <div className="profile-info">
          <div className="profile-info-sender">
            <span className="sender-from">From.</span>
            <span className="sender-name">{sender}</span>
          </div>
          <RelationBadge relationship={relationship} />
        </div>
      </div>

      <div className="separate-line" />
      <p className="text">{content}</p>
      <p className="date">{date}</p>
    </div>
  );
}

export default Card;
