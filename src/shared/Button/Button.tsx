import React from 'react';
import './Button.scss';
import classNames from 'classnames';

interface Props {
  type: 'anchor' | 'submit';
  size?: 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void
  disabled?: boolean;
  className?: string
}

export const Button: React.FC<Props> = ({
  type,
  size = 'md',
  onClick = () => {},
  disabled = false,
  children,
  className = '',
}) => {
  return (
    <button
      className={classNames(`action_button ${className}`, {
        'action_button--large': size === 'lg',
      })}
      type={type === 'anchor' ? 'button' : 'submit'}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
