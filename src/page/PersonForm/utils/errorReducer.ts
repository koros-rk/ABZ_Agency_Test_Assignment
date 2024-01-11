import { ErrorsActionType } from '../types/ErrorState/ErrorsActionType';
import { ErrorState } from '../types/ErrorState/ErrorState';

export const errorReducer = (
  state: ErrorState,
  { type, payload }: { type: ErrorsActionType, payload: string },
): ErrorState => {
  switch (type) {
    case ErrorsActionType.setNameError: {
      return {
        ...state,
        nameError: payload,
      };
    }

    case ErrorsActionType.setEmailError: {
      return {
        ...state,
        emailError: payload,
      };
    }

    case ErrorsActionType.setPhoneError: {
      return {
        ...state,
        phoneError: payload,
      };
    }

    case ErrorsActionType.setPhotoError: {
      return {
        ...state,
        photoError: payload,
      };
    }

    default: {
      return state;
    }
  }
};
