import React from 'react';
import './Input.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  label: string
}

export const Input: React.FC<Props> = ({ label }) => {
  return (
    <div className="field">
      <label htmlFor="inputText" className="field_label field_label--visible">{ label }</label>
      <input
        id="inputText"
        type="text"
        className="field_input field_input--default"
        placeholder={label}
      />
      <p className="field_info">Info message</p>
    </div>
  );
};
