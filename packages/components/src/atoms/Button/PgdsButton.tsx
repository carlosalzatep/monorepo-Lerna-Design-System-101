import React from "react";

interface ButtonProps {
  label?: string;
  className?: string[];
}

const Button = ({ label, className }: ButtonProps): React.JSX.Element => {
  const classNamesList = className?.length ? className?.join(' ') : '';
  return <button
    type="button"
    className={ `pgds-button ${classNamesList}` }
  >
    {label || 'Button'}
  </button>;
};

export default Button;
