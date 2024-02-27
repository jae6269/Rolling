import React, { useState } from 'react';
import { optionBtn } from '../../utils/imageImport';
import styles from './index.module.scss';

const Option = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = color => {
    setSelectedColor(color);
  };

  return (
    <div className={styles.colorOption}>
      <div
        className={`${styles.colorPalette} ${styles.beige}`}
        onClick={() => handleColorSelect('beige')}
      >
        <button className={styles.button}>
          <img src={optionBtn} alt="option button" />
        </button>
      </div>
      <div
        className={`${styles.colorPalette} ${styles.purple}`}
        onClick={() => handleColorSelect('purple')}
      >
        <button className={styles.button}>
          <img src={optionBtn} alt="option button" />
        </button>
      </div>
      <div
        className={`${styles.colorPalette} ${styles.blue}`}
        onClick={() => handleColorSelect('blue')}
      >
        <button className={styles.button}>
          <img src={optionBtn} alt="option button" />
        </button>
      </div>
      <div
        className={`${styles.colorPalette} ${styles.green}`}
        onClick={() => handleColorSelect('green')}
      >
        <button className={styles.button}>
          <img src={optionBtn} alt="option button" />
        </button>
      </div>
    </div>
  );
};

export default Option;
