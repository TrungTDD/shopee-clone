import React from 'react';

export default function BaseInputNumber({ value, onChange, ...props }) {
  const handleChange = event => {
    if (/^\d+$/.test(value) || (value !== '' && onChange)) {
      onChange(event.target.value);
    }
  };

  return <input value={value} type="text" onChange={handleChange} {...props} />;
}
