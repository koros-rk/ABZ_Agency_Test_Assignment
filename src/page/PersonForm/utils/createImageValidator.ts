import { ErrorMessages } from '../types/ErrorMessages';

type CreateImageValidator = (
  { maxSize, formats }: {
    maxSize: number,
    formats: string[],
  },
) => (file: File) => { isValid: boolean, error: ErrorMessages | null };

export const createImageValidator: CreateImageValidator = ({
  maxSize, formats,
}) => {
  return (file) => {
    const { type, size } = file;
    const error = null;

    if (size * 10e-7 > maxSize) {
      return { isValid: false, error: ErrorMessages.invalidSize };
    }

    if (!formats.includes(type)) {
      return { isValid: false, error: ErrorMessages.invalidFormat };
    }

    return { isValid: true, error };
  };
};
