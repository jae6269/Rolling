import React from 'react';
import './modal.scss';

/*
카드 컴포넌트를 확대했을때 나오는 모달입니다.

카드 컴포넌트 데이터를 그대로 받습니다.

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

function Modal({ props }) {
  const { sender, profileImageURL, relationship, content, font, createdAt } =
    props;
  return (
    <div className="modal-background">
      <div className="modal-container" />
    </div>
  );
}
export default Modal;
