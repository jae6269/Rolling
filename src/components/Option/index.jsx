import React, { useState } from 'react';
import useFetchData from '../../hooks/useFetchData';
import styles from './index.module.scss';
import optionBtn from '../../utils/imageImport';

const Option = () => {
  const [selectedOption, setSelectedOption] = useState('color');
  const [selectedButton, setSelectedButton] = useState(null);
  const colorValues = ['beige', 'purple', 'blue', 'green']; // 컬러 값 배열

  // API 응답 전체를 받습니다.
  const apiResponse = useFetchData(
    'https://rolling-api.vercel.app/background-images/',
  );
  // 응답에서 imageUrls 배열을 안전하게 추출합니다.
  const imageUrls = apiResponse ? apiResponse.imageUrls : [];

  const handleToggle = option => {
    setSelectedOption(option);
    setSelectedButton(null); // 토글 변경 시 선택된 버튼 초기화
  };

  const handleButtonClick = buttonIndex => {
    setSelectedButton(buttonIndex);
    if (selectedOption === 'image' && imageUrls[buttonIndex]) {
      // 이미지 모드일 때 URL 전달
      console.log('Image URL:', imageUrls[buttonIndex]);
    } else if (selectedOption === 'color') {
      // 컬러 모드일 때 컬러 값 전달
      console.log('Color Value:', colorValues[buttonIndex]);
    }
  };

  return (
    <div>
      <div className={styles.toggleButtons}>
        <button
          type="button"
          className={selectedOption === 'image' ? styles.selectedOption : ''}
          onClick={() => handleToggle('image')}
        >
          이미지
        </button>
        <button
          type="button"
          className={selectedOption === 'color' ? styles.selectedOption : ''}
          onClick={() => handleToggle('color')}
        >
          컬러
        </button>
      </div>

      <div className={styles.buttonsContainer}>
        {[0, 1, 2, 3].map(index => (
          <button
            key={index}
            type="button"
            className={styles.buttonStyle}
            style={{
              backgroundImage:
                selectedOption === 'image' && imageUrls[index]
                  ? `url(${imageUrls[index]})`
                  : 'none',
            }}
            onClick={() => handleButtonClick(index)}
          >
            {selectedButton === index && (
              <img
                src={optionBtn}
                alt="Option Button"
                className={styles.imageOverlay}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Option;
