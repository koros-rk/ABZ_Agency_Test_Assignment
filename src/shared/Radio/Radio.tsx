import React from 'react';
import './Radio.scss';

interface Props {
  name: string,
  value: string,
  checked?: boolean
}

export const Radio: React.FC<Props> = ({
  name,
  value,
  checked = false,
}) => {
  return (
    <div className="radio">
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        defaultChecked={checked}
        className="radio_button"
      />
      <label htmlFor={value} className="radio_label">{value}</label>
    </div>
  );
};
