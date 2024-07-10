// components/ui/Input.js
import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ id, type = 'text', placeholder, required, className, value, onChange, ...props }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-transform duration-300 hover:scale-105 ${className}`}
      {...props}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.any, 
  onChange: PropTypes.func,
};
