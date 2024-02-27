import React from 'react';
import './card.scss';
/*
data return format

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

function Card() {
  return (
    <div className="card-container">
      <div className="profile">
        <img
          className="profile-img"
          src="https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8"
          alt="profileImgae"
        />
        <div className="profile-info">
          <div className="profile-info-sender">
            <span className="sender-from">From.</span>
            <span className="sender-name">김재영</span>
          </div>
          {/* 관계 배지 들어갈 공간 */}
        </div>
      </div>

      <div className="separate-line" />
      <p className="text">가나다라마바사아자차카타파하</p>
      <p className="date">2024.02.28</p>
    </div>
  );
}

export default Card;
