import React, { useState } from 'react';
import MultiSelect from './MultiSelect';

const ParentComponent = () => {
  const options = [
    { id: 1, value: 'apple', label: 'Apple' },
    { id: 2, value: 'banana', label: 'Banana' },
    { id: 3, value: 'cherry', label: 'Cherry' },
    { id: 4, value: 'date', label: 'Date' },
    { id: 5, value: 'elderberry', label: 'Elderberry' },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]); // Manage selected values in the parent

  // Define the handleChange function to update selected values
  const handleChange = (selectedValues) => {
    setSelectedOptions(selectedValues);
  };

  console.log(selectedOptions);

  return (
    <div>
      <MultiSelect
        options={options}
        selectedOptions={selectedOptions} // Pass selected values as props
        handleChange={handleChange} // Pass the handleChange function as a prop
      />
    </div>
  );
};

export default ParentComponent;
