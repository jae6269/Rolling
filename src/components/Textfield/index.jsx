import React, { useState } from 'react';
import { arrowTopBtn, arrowDownBtn } from '../../utils/imageImport';

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options[0] || 'Placeholder',
  );

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false); // 드롭다운을 닫습니다.
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header">
        {selectedOption}
        <img
          src={isOpen ? arrowTopBtn : arrowDownBtn}
          className="dropdown-icon"
          alt="Toggle Dropdown"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)} // 여기서 옵션을 선택하고 드롭다운을 토글합니다.
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
