import React from 'react';
import styles from './index.module.scss';
import EmojiPicker from 'emoji-picker-react';
import addEmoji from '../../../assets/add-emoji.svg';
import arrowDown from '../../../assets/arrow_down.svg';
import shareButton from '../../../assets/share-button.svg';
import verticalLine from '../../../assets/vertical-line.svg';
import { useEffect, useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import KakaoShareButton from './KakaoShareButton';
import ProfileImages from '../ProfileImages/ProfileImages';
import EmojiBadge from '../Badge/EmojiBadge';
// import useFetchData from "../../../hooks/useFetchData";

//나중에 외부로 뺄 코드
// const [emojiClicked, setEmojiClicked] = useState(false);
//   const [reactionsResult, setReactionsResult] = useState([]);
//   const [recipientResult, setRecipientResult] = useState([]);
//   const URLRecipients = "https://rolling-api.vercel.app/2-9/recipients/2264/";
//   const URLReactions = "https://rolling-api.vercel.app/2-9/recipients/2264/reactions/";

//   useEffect(() => {
//     async function reactionsFetchData() {
//       try {
//         const response = await fetch(URLReactions);
//         const result = await response.json();
//         setReactionsResult(result);
//       } catch (error) {
//         console.log(`${URLReactions}에 대한 fetch error : ${error}`);
//       }
//     }
//     async function recipientFetchData() {
//       try {
//         const response = await fetch(URLRecipients);
//         const result = await response.json();
//         setRecipientResult(result);
//       } catch (error) {
//         console.log(`${URLRecipients}에 대한 fetch error : ${error}`);
//       }
//     }
//     reactionsFetchData();
//     recipientFetchData();
//   }, [emojiClicked]);
//console.log(recipientResult),console.log(reactionsResult) 를 하면 빈 배열이 출력된 후 결과가 출력돼서 이렇게 씀
// return( {recipientResult.length !== 0 && reactionsResult.length !== 0 && (
//     <HeaderService
//     recipientResult={recipientResult}
//     reactionsResult={reactionsResult}
//     reactionsURL={URLReactions}
//     emojiClicked={emojiClicked}
//     setEmojiClicked={setEmojiClicked}
//   />
// )})
function HeaderService({
  recipientResult,
  reactionsResult,
  reactionsURL,
  emojiClicked,
  setEmojiClicked,
}) {
  const [emojiPickerOn, setEmojiPickerOn] = useState(false);
  const [shareOn, setShareOn] = useState(false);
  const [moreEmojiOn, setMoreEmojiOn] = useState(false);
  const [urlCopied, setUrlCopied] = useState(false);

  const emojiPickerRef = useRef(null);
  const shareRef = useRef(null);
  const emojiRef = useRef(null);
  const shareLink = window.location.href; // 공유할 링크
  useEffect(() => {
    function handleClickOutside(event) {
      if (!emojiPickerRef.current.contains(event.target)) {
        setEmojiPickerOn(false);
      }
      if (!shareRef.current.contains(event.target)) {
        setShareOn(false);
      }
      if (!emojiRef.current.contains(event.target)) {
        setMoreEmojiOn(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleEmojiPicker = () => {
    setEmojiPickerOn(!emojiPickerOn);
  };
  const toggleShare = () => {
    setShareOn(!shareOn);
  };
  const toggleMoreEmoji = () => {
    setMoreEmojiOn(!moreEmojiOn);
  };

  //이모지를 선택했을 때 실행할 함수
  async function onEmojiClick(e) {
    const newEmoji = {
      emoji: `${e.emoji}`,
      type: 'increase',
    };
    await fetch(`${reactionsURL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEmoji),
    });
    //테스트용 코드
    // const result = await response.text();
    // console.log(result);

    //emojiClicked 상태가 바뀌면 headerService 함수 외부에서 리액션 리스트를 업데이트 해준다.
    //(이모지를 클릭하면 바로바로 화면에 반영되게끔)
    setEmojiClicked(!emojiClicked);
    //선택창 닫기
    setEmojiPickerOn(false);
  }

  function handleCopyLink() {
    setUrlCopied(true); // 복사되었습니다 메시지 표시
    // 5초 후에 복사되었습니다 메시지 숨기기
    setTimeout(() => {
      setUrlCopied(false);
    }, 5000);
  }
  return (
    <>
      <div className={styles.headerService}>
        <div className={styles.headerServiceInner}>
          <div className={styles.recipient}>To.{recipientResult.name}</div>

          <div className={styles.senderCount}>
            <ProfileImages recipientResult={recipientResult} />
            <div>
              <span className={styles.number}>
                {recipientResult.messageCount}
              </span>
              명이 작성했어요!
            </div>
          </div>
          <img
            className={styles.verticalLinePC}
            src={verticalLine}
            alt="구분선"
          />
          <div className={styles.emojiShare}>
            <div className={styles.emoji}>
              {recipientResult.topReactions.map((reaction, index) => (
                <EmojiBadge
                  key={index} // 반복되는 컴포넌트의 key 값 설정
                  emoji={reaction.emoji}
                  count={reaction.count}
                />
              ))}

              <div className={styles.emojiContainer} ref={emojiRef}>
                <button className={styles.arrowDown} onClick={toggleMoreEmoji}>
                  <img src={arrowDown} alt="이모지 더보기" />
                </button>
                {moreEmojiOn && (
                  <div className={styles.emojiList}>
                    {reactionsResult.results.map(reaction => {
                      return (
                        <EmojiBadge
                          key={reaction.id}
                          count={reaction.count}
                          emoji={reaction.emoji}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.emojiPicker} ref={emojiPickerRef}>
              <button
                className={styles.addEmojiMobile}
                onClick={toggleEmojiPicker}
              >
                <img src={addEmoji} alt="이모지 추가" />
              </button>
              <button
                className={styles.addEmojiTablet}
                onClick={toggleEmojiPicker}
              >
                <img src={addEmoji} alt="이모지 추가" />
                추가
              </button>
              {emojiPickerOn && (
                <EmojiPicker
                  className={styles.emojiPickerChild}
                  onEmojiClick={onEmojiClick}
                />
              )}
            </div>
            <img
              className={styles.verticalLine}
              src={verticalLine}
              alt="구분선"
            />
            <div className={styles.shareContainer} ref={shareRef}>
              <button className={styles.share} onClick={toggleShare}>
                <img src={shareButton} alt="공유하기" />
              </button>

              {shareOn && (
                <div className={styles.shareOptions}>
                  <KakaoShareButton />
                  <CopyToClipboard text={shareLink} onCopy={handleCopyLink}>
                    <button className={styles.shareOption}>URL 공유</button>
                  </CopyToClipboard>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {urlCopied ? <span>상민님 토스트</span> : null}
    </>
  );
}

export default HeaderService;
