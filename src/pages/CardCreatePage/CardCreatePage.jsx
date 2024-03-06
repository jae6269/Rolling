import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Option from '../../components/Option';
import styles from './cardCreatePage.module.scss';
import useFetchData from '../../hooks/useFetchData';
import Header from '../../components/common/Header';
import { POST_BASE_URL, backGroundImgUrl } from '../../constants/fetchUrl';

function CardCreatePage() {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('color');
  const [selectedButton, setSelectedButton] = useState(0);
  const [invalid, setInvalid] = useState(false);
  const navigate = useNavigate();
  // URL 나중에 수정

  const colorValues = ['beige', 'purple', 'blue', 'green'];

  const apiResponse = useFetchData(backGroundImgUrl);
  const imageUrls = apiResponse ? apiResponse.imageUrls : [];

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const newRecipientInfo = {
    name: inputValue,
    // backgroundColor키 없이 backgroundImageURL만 정해주면 에러가 남
    backgroundColor: colorValues[selectedButton],
    backgroundImageURL:
      selectedOption === 'color' ? null : imageUrls[selectedButton],
  };

  // 생성 버튼 클릭 시 recipient data 생성 후 post/id페이지로 이동
  const handleCreateRecipient = async () => {
    try {
      const response = await fetch(`${POST_BASE_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecipientInfo),
      });
      const result = await response.json();
      navigate(`${result.id}`);
    } catch (error) {
      console.log(`${POST_BASE_URL}에 대한 post error : ${error}`);
    }
  };

  // 인풋에서 blur 할 때 공백제외 인풋이 비어있는지 확인
  const handleInputBlur = () => {
    if (!inputValue.trim()) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  };
  return (
    <>
      <Header buttonOn={false} />
      <div className={styles.content}>
        <form>
          <label htmlFor="recipientName">To.</label>
          <input
            id="recipientName"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="받는 사람 이름을 입력해 주세요"
            className={invalid ? styles.invalidInput : ''}
            onBlur={handleInputBlur}
          />
          {invalid && (
            <p className={styles.errorMessage}>값을 입력해 주세요.</p>
          )}
        </form>
        <h1>배경화면을 선택해 주세요.</h1>
        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        <Option
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
        {/* 상민님 버튼 컴포넌트로 대체될 예정 */}
        <button
          type="button"
          className={`${styles.cardCreateButton} ${!inputValue.trim() ? styles.disabledButton : ''}`}
          onClick={handleCreateRecipient}
          // 공백 제외 인풋이 비어있으면 버튼 비활성화
          disabled={!inputValue.trim()}
        >
          생성하기
        </button>
      </div>
    </>
  );
}
export default CardCreatePage;
