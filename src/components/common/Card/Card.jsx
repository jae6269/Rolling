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
  const CARD_DATA_URL =
    'https://rolling-api.vercel.app/4-20//recipients/1/messages/';
  const testId = 1;
  return (
    <div className="card-container">
      <div className="profile"></div>
      <div className="text"></div>
      <p className="date"></p>
    </div>
  );
}

export default Card;
