import React, {
  useCallback, useEffect, useMemo, useReducer, useState,
} from 'react';
import './PersonForm.scss';
import { createPortal } from 'react-dom';
import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/FormFields/Input/Input';
import { Radio } from '../../shared/Radio/Radio';
import { Textarea } from '../../shared/FormFields/Input/Textarea';
import { formReducer } from './formReducer';
import { FormActionType } from './types/FormState/FormActionType';
import { ValidationPatterns } from './types/ValidationPatterns';
import * as PositionClient from '../../api/fetchClient/positions';
import { Position } from '../../api/types/Position';
import { Preloader } from '../../shared/Preloader/Preloader';
import * as UserClient from '../../api/fetchClient/users';
import { errorReducer } from './errorReducer';
import { ErrorsActionType } from './types/ErrorState/ErrorsActionType';
import { createImageValidator } from './createImageValidator';
import { Modal } from '../../components/Modal/Modal';
import {useAppDispatch, useAppSelector} from "../../api/store/hooks";
import {UserSelector} from "../../api/store/slices/users/User.slice";
import {getUsers} from "../../api/store/slices/users/AsyncActions/get";

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  position_id: 1,
  photo: null,
};

const initialErrorState = {
  nameError: '',
  emailError: '',
  phoneError: '',
  photoError: '',
};

export const PersonForm: React.FC = () => {
  const { startPosition } = useAppSelector(UserSelector);
  const dispatch = useAppDispatch();

  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const [errorState, errorDispatch] = useReducer(errorReducer, initialErrorState);
  const [errorMessage, setErrorMessage] = useState('');
  const [positions, setPositions] = useState<Position[]>([]);
  const [isPositionsLoading, setIsPositionsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createFormSetter = useCallback((action: FormActionType) => {
    return (value: string | number | File) => {
      formDispatch({ type: action, payload: value });
    };
  }, []);
  const createErrorSetter = useCallback((action: ErrorsActionType) => {
    return (value: string) => {
      errorDispatch({ type: action, payload: value });
    };
  }, []);

  const isReadyToUpload = useMemo(() => {
    const {
      name, email, phone, photo,
    } = formState;
    const {
      nameError, emailError, phoneError, photoError,
    } = errorState;

    const isError = [nameError, emailError, phoneError, photoError].some(property => property !== '');
    const isReady = ![name, email, phone, photo].some(property => {
      return property === '' || property === null;
    });

    return isError ? !isError : isReady;
  }, [formState, errorState]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    UserClient.post(formState)
      .then(({ status, message, fails }) => {
        if (status) {
          window.location.href = '#personList';
          dispatch(getUsers({ ...startPosition, replace: true }));
        } else {
          if (fails) {
            if (fails.name) {
              createErrorSetter(ErrorsActionType.setNameError)(fails.name[0]);
            }

            if (fails.email) {
              createErrorSetter(ErrorsActionType.setEmailError)(fails.email[0]);
            }

            if (fails.phone) {
              createErrorSetter(ErrorsActionType.setPhoneError)(fails.phone[0]);
            }

            if (fails.photo) {
              createErrorSetter(ErrorsActionType.setPhotoError)(fails.photo[0]);
            }
          }

          if (message) {
            setErrorMessage(message);
            setTimeout(() => {
              setErrorMessage('');
            }, 3700);
          }
        }
      })
      .finally(() => setIsSubmitting(false));
  };

  useEffect(() => {
    setIsPositionsLoading(true);

    PositionClient.get()
      .then((positionsFromServer) => {
        setPositions(positionsFromServer);
      })
      .finally(() => setIsPositionsLoading(false));
  }, []);

  return (
    <section className="form" id="addPerson">
      <h2 className="form_title">Working with POST request</h2>

      <form
        className="form_container"
        onSubmit={handleSubmit}
      >
        <Input
          label="Your name"
          value={formState.name}
          setValue={createFormSetter(FormActionType.setName)}
          validationPattern={ValidationPatterns.Name}
          error={errorState.nameError}
          setError={createErrorSetter(ErrorsActionType.setNameError)}
        />
        <Input
          label="Email"
          value={formState.email}
          setValue={createFormSetter(FormActionType.setEmail)}
          validationPattern={ValidationPatterns.Email}
          error={errorState.emailError}
          setError={createErrorSetter(ErrorsActionType.setEmailError)}
        />
        <Input
          label="Phone"
          info="+38 (XXX) XXX - XX - XX"
          value={formState.phone}
          setValue={createFormSetter(FormActionType.setPhone)}
          validationPattern={ValidationPatterns.Phone}
          error={errorState.phoneError}
          setError={createErrorSetter(ErrorsActionType.setPhoneError)}
        />

        <div className="form_radio_group">
          <p className="form_radio_group-title">Select your position</p>
          <div className="form_radio_group-container">
            {
              !isPositionsLoading
                ? (
                  positions.map(({ id, name }) => (
                    <Radio
                      name="position"
                      value={id}
                      text={name}
                      checked={formState.position_id === id}
                      handleChange={createFormSetter(FormActionType.setPosition)}
                      key={id}
                    />
                  ))
                )
                : (<Preloader />)
            }
          </div>
        </div>

        <Textarea
          error={errorState.photoError}
          setError={createErrorSetter(ErrorsActionType.setPhotoError)}
          onFileSelect={createFormSetter(FormActionType.setPhoto)}
          imageValidation={
            createImageValidator({
              maxSize: 5,
              formats: ['image/jpeg', 'image/jpg'],
            })
          }
        />

        {isSubmitting
          ? (<Preloader size="sm" />)
          : (
            <Button
              type="submit"
              className="form_button"
              disabled={!isReadyToUpload}
            >
              Sign up
            </Button>
          )}

      </form>
      {errorMessage && createPortal(
        <Modal message={errorMessage} />,
        document.body,
      )}
    </section>
  );
};
