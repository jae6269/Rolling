import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/common/Header';
import PostButton from './components/PostButton';
import Card from '../../components/common/Card/Card';
import styles from './postPage.module.scss';
import useFetchData from '../../hooks/useFetchData';

/**
 * ListPage에서 특정인물(id) 롤링페이퍼 클릭하면,
 * 해당 인물에게 쓰여진 롤링페이퍼를 보여주는 페이지
 *
 * ListPage에서 받아와야 하는 데이터 목록
 *
 * {
  id: 2,
  name: "강영훈",
  backgroundColor: "green",
  backgroundImageURL: null,
  createdAt: "2023-10-26T13:19:31.401765Z",
  messageCount: 3,
  recentMessages: [
    {
      id: 32,
      recipientId: 2,
      sender: "김하은",
      profileImageURL: "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
      relationship: "가족",
      content: "열심히 일하는 모습 멋있습니다.",
      font: "Pretendard",
      createdAt: "2023-11-01T08:05:25.399056Z"
    },
    {
      id: 31,
      recipientId: 2,
      sender: "이영준",
      profileImageURL: "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
      relationship: "지인",
      content: "항상 응원합니다",
      font: "Noto Sans",
      createdAt: "2023-11-01T08:04:12.852691Z"
    },
    ...
  ],
  reactionCount: 48,
  topReactions: [
    {
      id: 27,
      emoji: "😀",
      count: 14
    },
    {
      id: 31,
      emoji: "🥹",
      count: 11
    },
  ]
}
 * 
 * @returns
 */

function PostPage() {
  const { id } = useParams();
  const url = `https://rolling-api.vercel.app/2-6/recipients/${id}/`;
  const {
    name,
    backgroundColor,
    backgroundImageURL,
    messageCount,
    recentMessages,
    reactionCount,
    topReactions,
  } = useFetchData(url);

  return (
    <>
      <Header buttonOn={false} />
      <div className={styles.cardsBackground}>
        <div className={styles.cardsContainer}>
          <PostButton />
          {recentMessages ? (
            recentMessages.map(card => <Card key={card.id} props={card} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
export default PostPage;
