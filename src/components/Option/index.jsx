import React, { useState } from 'react';
import optionBtn from '../../utils/imageImport';
import styles from './index.module.scss';

const Option = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = color => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  return (
    <div className={styles.colorOption}>
      <button
        type="button"
        className={`${styles.colorPalette} ${styles.beige}`}
        onClick={() => handleColorSelect('beige')}
      >
        {selectedColor === 'beige' && (
          <img src={optionBtn} alt="option button" />
        )}
      </button>
      <button
        type="button"
        className={`${styles.colorPalette} ${styles.purple}`}
        onClick={() => handleColorSelect('purple')}
      >
        {selectedColor === 'purple' && (
          <img src={optionBtn} alt="option button" />
        )}
      </button>
      <button
        type="button"
        className={`${styles.colorPalette} ${styles.blue}`}
        onClick={() => handleColorSelect('blue')}
      >
        {selectedColor === 'blue' && (
          <img src={optionBtn} alt="option button" />
        )}
      </button>
      <button
        type="button"
        className={`${styles.colorPalette} ${styles.green}`}
        onClick={() => handleColorSelect('green')}
      >
        {selectedColor === 'green' && (
          <img src={optionBtn} alt="option button" />
        )}
      </button>
    </div>
  );
};

export default Option;
