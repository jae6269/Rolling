import { useState } from 'react';
import { optionBtn } from '../../utils/imageImport';
import './index.module.scss';

const Option = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = color => {
    setSelectedColor(color);
  };

  return (
    <div className="styles.color-option">
      <div
        className={`${color - palette} ${styles['beige']}`}
        onClick={() => handleColorSelect('beige')}
      >
        <img src={optionBtn} alt="option button" />
      </div>
      <div
        className={`${color - palette} ${styles['beige']}`}
        onClick={() => handleColorSelect('purple')}
      >
        <img src={optionBtn} alt="option button" />
      </div>
      <div
        className={`${color - palette} ${styles['beige']}`}
        onClick={() => handleColorSelect('blue')}
      >
        <img src={optionBtn} alt="option button" />
      </div>
      <div
        className={`${color - palette} ${styles['beige']}`}
        onClick={() => handleColorSelect('green')}
      >
        <img src={optionBtn} alt="option button" />
      </div>
    </div>
  );
};

export default Option;
