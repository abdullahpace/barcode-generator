import React, { useState } from 'react';
import MultiSelectCheckbox from './MultiSelectCheckbox';

function FormComponent() {
  const [selectedValues, setSelectedValues] = useState([]);

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  const handleSelectedValues = (values) => {
    setSelectedValues(values);
  };

  return (
    <div>
      <h2>Multi-Select Checkbox Example</h2>
      <MultiSelectCheckbox options={options} onChange={handleSelectedValues} />
      <div>
        <h3>Selected Values:</h3>
        <ul>
          {selectedValues.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FormComponent;
