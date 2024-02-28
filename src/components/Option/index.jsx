import React, { useState } from 'react';
import styles from './index.module.scss';
import optionBtn from '../../utils/imageImport';

const Option = () => {
  const [selectedOption, setSelectedOption] = useState('color');
  const [selectedButton, setSelectedButton] = useState(null);

  const handleToggle = option => {
    setSelectedOption(option);
    setSelectedButton(null);
  };

  const handleButtonClick = buttonId => {
    setSelectedButton(buttonId);
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
        {/* 버튼 1 */}
        <button
          type="button"
          className={styles.buttonStyle}
          onClick={() => handleButtonClick('button1')}
        >
          {selectedButton === 'button1' && (
            <img
              src={optionBtn}
              alt="Option Button"
              className={styles.imageOverlay}
            />
          )}
          버튼 1
        </button>

        {/* 버튼 2 */}
        <button
          type="button"
          className={styles.buttonStyle}
          onClick={() => handleButtonClick('button2')}
        >
          {selectedButton === 'button2' && (
            <img
              src={optionBtn}
              alt="Option Button"
              className={styles.imageOverlay}
            />
          )}
          버튼 2
        </button>

        {/* 버튼 3 */}
        <button
          type="button"
          className={styles.buttonStyle}
          onClick={() => handleButtonClick('button3')}
        >
          {selectedButton === 'button3' && (
            <img
              src={optionBtn}
              alt="Option Button"
              className={styles.imageOverlay}
            />
          )}
          버튼 3
        </button>

        {/* 버튼 4 */}
        <button
          type="button"
          className={styles.buttonStyle}
          onClick={() => handleButtonClick('button4')}
        >
          {selectedButton === 'button4' && (
            <img
              src={optionBtn}
              alt="Option Button"
              className={styles.imageOverlay}
            />
          )}
          버튼 4
        </button>
      </div>
    </div>
  );
};

export default Option;
