import React from 'react';
import './Radio.scss';

interface Props {
  name: string,
  value: number,
  text: string,
  checked: boolean,
  handleChange: (value: number) => void
}

export const Radio: React.FC<Props> = ({
  name,
  value,
  text,
  checked,
  handleChange,
}) => {
  return (
    <div className="radio">
      <input
        type="radio"
        id={text}
        name={name}
        value={value}
        defaultChecked={checked}
        className="radio_button"
        onChange={(e) => handleChange(+e.target.value)}
      />
      <label htmlFor={text} className="radio_label">{text}</label>
    </div>
  );
};
