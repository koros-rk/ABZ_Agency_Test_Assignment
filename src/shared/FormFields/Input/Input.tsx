import React from 'react';
import './Input.scss';
import classNames from 'classnames';

interface Props {
  label: string
  info?: string

  value: string
  setValue: (value: string) => void
  validationPattern: RegExp

  error: string
  setError: (value: string) => void
}

export const Input: React.FC<Props> = ({
  label,
  info = '',
  value,
  validationPattern,
  error,
  setValue,
  setError,
}) => {
  const isValid = !error;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: data } = event.target;
    const isError = validationPattern.test(data.trim());

    if (!isError) {
      setError(`${label} is incorrect`);

      return;
    }

    setError('');
  };

  return (
    <div className="field">
      <label
        htmlFor="inputText"
        className={classNames(
          'field_label',
          {
            'field_label--error': !isValid,
            'field_label--visible': value,
          },
        )}
      >
        { label }
      </label>
      <input
        id="inputText"
        type="text"
        className={classNames(
          'field_input field_input--default',
          { 'field_input--default--error': !isValid },
        )}
        placeholder={label}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p className={classNames(
        'field_info',
        { 'field_info--error': !isValid },
      )}
      >
        { error || info }
      </p>
    </div>
  );
};
