import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import PostCard from './components/PostCard';
import Card from '../../components/common/Card/Card';
import styles from './postPage.module.scss';
import useFetchData from '../../hooks/useFetchData';
import HeaderService from '../../components/common/HeaderService/HeaderService';

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
  const [isEditMode, setIsEditMode] = useState({
    modeSwitch: false,
    buttonText: '삭제하기',
  });
  const [emojiClicked, setEmojiClicked] = useState(false);
  const { id } = useParams();
  const url = `https://rolling-api.vercel.app/2-6/recipients/${id}/`;
  const reactionUrl = `https://rolling-api.vercel.app/2-6/recipients/${id}/reactions/`;
  const recipientData = useFetchData(url);
  const reactionData = useFetchData(reactionUrl);

  const handleEditModeSwitch = e => {
    e.preventDefault();
    if (isEditMode.modeSwitch === false) {
      const editMode = {
        modeSwitch: true,
        buttonText: '삭제완료',
      };
      setIsEditMode(editMode);
    } else {
      const editMode = {
        modeSwitch: false,
        buttonText: '삭제하기',
      };
      setIsEditMode(editMode);
    }
  };

  return (
    <div className={styles.postPageContainer}>
      <Header buttonOn={false} />
      <HeaderService
        recipientResult={recipientData}
        reactionsResult={reactionData}
        reactionsURL={reactionUrl}
        emojiClicked={emojiClicked}
        setEmojiClicked={setEmojiClicked}
      />

      <div
        className={styles.cardsBackground}
        style={{
          backgroundColor: recipientData.backgroundColor,
          backgroundImage: `url(${recipientData.backgroundImageURL})`,
        }}
      >
        <button
          className={styles.modeSwitchButton}
          type="button"
          onClick={handleEditModeSwitch}
        >
          {isEditMode.buttonText}
        </button>
        <div className={styles.cardsContainer}>
          <Link to={`/post/${id}/message`}>
            <PostCard />
          </Link>
          {recipientData.recentMessages &&
            recipientData.recentMessages.map(card => (
              <Card
                key={card.id}
                props={card}
                isEditMode={isEditMode.modeSwitch}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
export default PostPage;
