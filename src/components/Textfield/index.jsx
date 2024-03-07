import React, { useState } from 'react';
import { arrowTopBtn, arrowDownBtn } from '../../utils/imageImport';

function Dropdown({ label, options, onChange, value }) {
  const [error, setError] = useState('');

  const handleChange = event => {
    const newValue = event.target.value;
    setError(newValue ? '' : 'Please select an option');
    onChange(newValue);
  };

  return (
    <div className="dropdown">
      {label && <label htmlFor="dropdown">{label}</label>}
      <select id="dropdown" onChange={handleChange} value={value}>
        <option value="">Select...</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default Dropdown;
