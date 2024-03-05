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
  const [recipients, setRecipients] = useState([]);
  const [reactions, setReactions] = useState([]);
  const [page, setPage] = useState(0);
  const [cards, setCards] = useState([]);
  const [ref, inView] = useInView();
  const recipientUrl = `https://rolling-api.vercel.app/2-9/recipients/${id}/`;
  const reactionUrl = `https://rolling-api.vercel.app/2-9/recipients/${id}/reactions/`;
  const messageUrl = `https://rolling-api.vercel.app/2-9/recipients/${id}/messages/`;

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

  // 카드 데이터를 가져올 함수
  // 처음에는 8개, 그다음 무한스크롤(6개씩추가로 가져오도록 설정)
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

  // inVeiw가 True가 될때에 추가로 카드 가져오는 Effect
  useEffect(() => {
    if (inView) {
      getCards();
    }
  }, [inView]);

  // 이모지 클릭될때 HeaderService에 바로 반영되도록하는 Effect
  useEffect(() => {
    async function reactionsFetchData() {
      try {
        const response = await fetch(reactionUrl);
        const result = await response.json();
        setReactions(result);
      } catch (error) {
        console.log(`${reactionUrl}에 대한 fetch error : ${error}`);
      }
    }
    async function recipientFetchData() {
      try {
        const response = await fetch(recipientUrl);
        const result = await response.json();
        setRecipients(result);
      } catch (error) {
        console.log(`${recipientUrl}에 대한 fetch error : ${error}`);
      }
    }
    reactionsFetchData();
    recipientFetchData();
  }, [emojiClicked]);

  return (
    <>
      <Header buttonOn={false} />
      <HeaderService
        recipientResult={recipients}
        reactionsResult={reactions}
        reactionsURL={reactionUrl}
        emojiClicked={emojiClicked}
        setEmojiClicked={setEmojiClicked}
      />

      <div
        className={styles.cardsBackground}
        style={{
          backgroundColor: recipients.backgroundColor,
          backgroundImage: `url(${recipients.backgroundImageURL})`,
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
