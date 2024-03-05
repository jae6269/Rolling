import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Header from '../../components/common/Header';
import PostCard from './components/PostCard';
import Card from '../../components/common/Card/Card';
import styles from './postPage.module.scss';
import useFetchData from '../../hooks/useFetchData';
import HeaderService from '../../components/common/HeaderService/HeaderService';

function PostPage() {
  const { id } = useParams();
  const [isEditMode, setIsEditMode] = useState({
    modeSwitch: false,
    buttonText: '삭제하기',
  });
  const [emojiClicked, setEmojiClicked] = useState(false);
  const [page, setPage] = useState(0);
  const [cards, setCards] = useState([]);
  const [ref, inView] = useInView();
  const url = `https://rolling-api.vercel.app/2-9/recipients/${id}/`;
  const reactionUrl = `https://rolling-api.vercel.app/2-9/recipients/${id}/reactions/`;
  const messageUrl = `https://rolling-api.vercel.app/2-9/recipients/${id}/messages/`;
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

  const getCards = async function () {
    let query = '';
    if (page !== 0) {
      query = `?limit=6&offset=${6 * (page - 1) + 8}`;
    }
    try {
      const response = await fetch(messageUrl + query);
      const result = await response.json();
      setCards([...cards, ...result.results]);
      setPage(page + 1);
    } catch (error) {
      console.log('카드 데이터 Fetch 에러', error);
    }
  };

  useEffect(() => {
    getCards();
  }, [inView]);

  return (
    <>
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
        <div className={styles.cardsContainer}>
          <button
            className={styles.modeSwitchButton}
            type="button"
            onClick={handleEditModeSwitch}
          >
            {isEditMode.buttonText}
          </button>
          <Link to={`/post/${id}/message`}>
            <PostCard />
          </Link>
          {cards &&
            cards.map(card => (
              <Card
                key={card.id}
                props={card}
                isEditMode={isEditMode.modeSwitch}
              />
            ))}
          <div ref={ref} />
        </div>
      </div>
    </>
  );
}
export default PostPage;
