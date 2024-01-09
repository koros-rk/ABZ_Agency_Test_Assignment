import React from 'react';
import './Preloader.scss';
import classNames from 'classnames';

interface Props {
  className?: string
  size?: 'sm' | 'md'
}

export const Preloader: React.FC<Props> = ({ className = '', size = 'md' }) => {
  return (
    <>
      <div className={`loader ${className}`}>
        <div className={classNames('loader_icon', {
          'loader_icon--small': size === 'sm',
        })}
        >
        </div>
      </div>
    </>
  );
};
