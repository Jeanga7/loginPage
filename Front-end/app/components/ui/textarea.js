// components/ui/Textarea.js
import React from 'react';
import PropTypes from 'prop-types';

export const Textarea = ({ id, placeholder, required, className, ...props }) => {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      required={required}
      className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-transform duration-300 hover:scale-105 ${className}`}
      {...props}
    ></textarea>
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};
