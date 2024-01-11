import React, {useEffect, useRef} from 'react';
import './Input.scss';
import classNames from 'classnames';
import { ErrorMessages } from '../../../page/PersonForm/types/ErrorMessages';

interface Props {
  error: string
  setError: (value: string) => void
  file: File | null
  onFileSelect: (file: File) => void
  imageValidation: (file: File) => { isValid: boolean, error: ErrorMessages | null }
}

export const Textarea: React.FC<Props> = ({
  error,
  setError,
  file,
  onFileSelect,
  imageValidation,
}) => {
  const input = useRef<HTMLInputElement>(null);
  const visibleInput = useRef<HTMLInputElement>(null);
  const isValid = !error;

  const openFileBrowser = () => {
    if (input.current) {
      input.current.click();
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.item(0);

    if (selectedFile) {
      const { isValid: isFileValid, error: errorMessage } = imageValidation(selectedFile);

      if (errorMessage) {
        setError(errorMessage);
      }

      if (isFileValid) {
        onFileSelect(selectedFile);
        setError('');
      }
    }
  };

  useEffect(() => {
    let name = '';

    if (file) {
        name = file.name;
    }

    if (visibleInput.current) {
        visibleInput.current.value = name;
    }
  }, [file]);

  return (
    <div className="field field--upload">
      <button
        type="button"
        className={classNames('field_button', {
          'field_button--error': !isValid,
        })}
        onClick={openFileBrowser}
      >
        Upload
      </button>
      <input
        type="text"
        ref={visibleInput}
        className={classNames('field_input field_input--upload', {
          'field_input--upload--error': !isValid,
        })}
        placeholder="Upload your photo"
        readOnly
      />
      <input
        type="file"
        ref={input}
        className="field_input field_input--upload--fake"
        onChange={handleFileSelect}
      />
      <p className={classNames('field_info', {
        'field_info--hidden': isValid,
        'field_info--error': !isValid,
      })}
      >
        {error}
      </p>
    </div>
  );
};
