import { useState } from 'react';
import { optionBtn } from '../../utils/imageImport';

const Option = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="styles.color-option">
      <div className="styles.beige">
        <img src={optionBtn} alt="option button" />
      </div>
      <div className="styles.purple">
        <img src={optionBtn} alt="option button" />
      </div>
      <div className="styles.blue">
        <img src={optionBtn} alt="option button" />
      </div>
      <div className="styles.green">
        <img src={optionBtn} alt="option button" />
      </div>
    </div>
  );
};

export default Option;
