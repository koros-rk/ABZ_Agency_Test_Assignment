import React from 'react';
import './Button.scss';

interface Props {
  type: 'anchor' | 'submit';
  children: React.ReactNode;
  onClick?: () => void
  disabled?: boolean;
  className?: string
}

export const Button: React.FC<Props> = ({
  type,
  onClick = () => {},
  disabled = false,
  children,
  className = '',
}) => {
  return (
    <button
      className={`action_button ${className}`}
      type={type === 'anchor' ? 'button' : 'submit'}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
