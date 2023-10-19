import React, { useState } from 'react';

const EPID = () => {
  const [epid, setEpid] = useState('');
  const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const inputValue = e.target.value;
  //   // const validCharacters = /^[A-Za-z0-9]+$/;
  //   const validCharacters = /^[A-Za-z0-9/]+$/;
  //   // Check if the input value matches the valid characters pattern
  //   if (!validCharacters.test(inputValue)) {
  //     setErrors({
  //       epid: 'Invalid characters. Please use only letters and numbers.',
  //     });
  //   } else {
  //     setErrors({ epid: '' });
  //     setEpid(inputValue.toUpperCase()); // Convert to uppercase if valid
  //   }
  // };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const validCharacters = /^[A-Za-z0-9/]+$/;

    // Check if the input is empty and clear both the error and the epid state
    if (inputValue === '') {
      setErrors({ epid: '' });
      setEpid('');
    } else if (!validCharacters.test(inputValue)) {
      setErrors({
        epid: 'Invalid characters. Please use only letters and numbers.',
      });
    } else {
      setErrors({ epid: '' });
      setEpid(inputValue.toUpperCase()); // Convert to uppercase if valid
    }
  };

  return (
    <div>
      <label htmlFor='epid'>Enter only letters and numbers:</label>
      <input
        type='text'
        name='epid'
        id='epid'
        className='form-control'
        value={epid}
        placeholder='EPID NO'
        onChange={handleChange}
      />
      {errors.epid && (
        <span className='error-message text-danger ms-1'>{errors.epid}</span>
      )}
    </div>
  );
};

export default EPID;
