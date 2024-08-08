import React from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  label?: string;
  classNames?: string[];
}

const Button = ({ label = 'Button', classNames = [] }: ButtonProps) => {
  const classNamesList = classNames?.length ? classNames?.join(' ') : '';
  return (
    <div className='pgds-button__wrapper'>
      <button
        type='button'
        className={`pgds-button__element ${classNamesList}`}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
