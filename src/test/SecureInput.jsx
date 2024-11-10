// components/SecureInput.jsx
import React from 'react';
import { SecurityUtils } from '../libs/utils/apiSecurity';

const SecureInput = ({ value, onChange, ...props }) => {
  const handleChange = (e) => {
    const sanitizedValue = SecurityUtils.sanitizeInput(e.target.value);
    onChange(sanitizedValue);
  };

  return <input value={value} onChange={handleChange} {...props} />;
};

export default SecureInput;