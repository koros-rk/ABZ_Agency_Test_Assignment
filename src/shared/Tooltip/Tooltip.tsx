import React from 'react';
import './Tooltip.scss';

interface Props {
  message: string,
  children: React.ReactNode
}

export const Tooltip: React.FC<Props> = ({ message, children }) => {
  return (
    <div className="tooltip_container">
      {children}
      <div className="tooltip">
        <p className="tooltip_message">{message}</p>
      </div>
    </div>
  );
};
