import React from 'react';
import './Card.scss';
import { User } from '../../api/types/User';

interface Props {
  user: User
  className?: string
}

export const Card: React.FC<Props> = ({ user, className = '' }) => {
  // eslint-disable-next-line no-console
  console.log(user);

  return (
    <article className={`card ${className}`}>
      <img
        src="https://frontend-test-assignment-api.abz.agency/images/users/5b977ba13fb3330.jpeg"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // eslint-disable-line no-param-reassign
          currentTarget.src = '/photo-cover.svg'; // eslint-disable-line no-param-reassign
        }}
        alt="user_photo"
        className="card_photo"
      />

      {/* <Tooltip message="Tooltip message"> */}
      <p className="card_info card_info--title">
        Salvador Stewart Flynn Thomas Rachinsky
      </p>
      {/* </Tooltip> */}

      <p className="card_info">
        Frontend Developer Frontend DEVELOPER
      </p>

      <p className="card_info">
        frontend_develop@gmail.com
      </p>

      <p className="card_info">
        +38 (098) 278 44 24
      </p>
    </article>
  );
};
