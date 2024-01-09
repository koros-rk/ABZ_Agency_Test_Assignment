import { FormState } from './types/FormState/FormState';
import { FormActionType } from './types/FormState/FormActionType';

export const formReducer = (
  state: FormState,
  { type, payload }: { type: FormActionType, payload: string | number | File },
): FormState => {
  switch (type) {
    case FormActionType.setName: {
      if (typeof payload === 'string') {
        return {
          ...state,
          name: payload,
        };
      }

      return state;
    }

    case FormActionType.setEmail: {
      if (typeof payload === 'string') {
        return {
          ...state,
          email: payload,
        };
      }

      return state;
    }

    case FormActionType.setPhone: {
      if (typeof payload === 'string') {
        return {
          ...state,
          phone: payload,
        };
      }

      return state;
    }

    case FormActionType.setPosition: {
      if (typeof payload === 'number') {
        return {
          ...state,
          position_id: payload,
        };
      }

      return state;
    }

    case FormActionType.setPhoto: {
      if (payload instanceof File) {
        return {
          ...state,
          photo: payload,
        };
      }

      return state;
    }

    default: {
      return state;
    }
  }
};
