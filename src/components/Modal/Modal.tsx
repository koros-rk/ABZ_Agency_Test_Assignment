import React, { useEffect, useState } from 'react';
import './Modal.scss';
import ProgressBar from '@ramonak/react-progress-bar';

export const Modal: React.FC<{ message: string }> = ({ message }) => {
  const [value, setValue] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(prevState => {
        return Math.round(prevState - 3.4);
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="modal">
      <p className="modal_title">{ message }</p>
      <ProgressBar
        className="modal_progress--wapper"
        barContainerClassName="modal_progress--container"
        bgColor="#CB3D40"
        height="10px"
        isLabelVisible={false}
        transitionDuration="100ms"
        transitionTimingFunction="linear"
        completed={value}
      />
    </div>
  );
};
