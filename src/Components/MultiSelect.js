import React from 'react';
import Select from 'react-select';

const MultiSelect = ({ options, selectedOptions, handleChange }) => {
  return (
    <div>
      <h3>Multi-Select Example</h3>
      <Select
        isMulti
        value={selectedOptions}
        options={options}
        onChange={handleChange} // Use the handleChange function from props
      />
      <div>
        <p>Selected Options:</p>
        <ul>
          {selectedOptions.map((option) => (
            <li key={option.value}>{option.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiSelect;
