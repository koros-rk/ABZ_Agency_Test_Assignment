import React from 'react';
import './Input.scss';

interface Props {
  onSubmit: () => void
}

export const Textarea: React.FC<Props> = ({
  onSubmit = () => {},
}) => {
  return (
    <div className="field">
      <button
        type="button"
        className="field_button"
        onClick={onSubmit}
      >
        Upload
      </button>
      <input
        type="text"
        className="field_input field_input--upload"
        placeholder="Upload your photo"
        readOnly
      />
      <p className="field_info field_info--hidden">Error text</p>
    </div>
  );
};
