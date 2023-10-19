import React, { useState } from 'react';

const MultiSelectCheckbox = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const option = event.target.value;

    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <select
        multiple
        value={selectedOptions}
        onChange={handleOptionChange}
        style={{ height: '200px' }}
        className='form-select'
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={() => onChange(selectedOptions)}>
        Get Selected Values
      </button>
    </div>
  );
};

export default MultiSelectCheckbox;
