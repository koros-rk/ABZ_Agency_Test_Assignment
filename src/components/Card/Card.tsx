import React from 'react';
import './Card.scss';
import { User } from '../../api/types/User';

interface Props {
  user: User
  className?: string
}

export const Card: React.FC<Props> = ({ user, className = '' }) => {
  return (
    <article className={`card ${className}`}>
      <img
        src={user.photo}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // eslint-disable-line no-param-reassign
          currentTarget.src = './photo-cover.svg'; // eslint-disable-line no-param-reassign
        }}
        alt="user_photo"
        className="card_photo"
      />

      {/* <Tooltip message="Tooltip message"> */}
      <p className="card_info card_info--title">
        {user.name}
      </p>
      {/* </Tooltip> */}

      <p className="card_info">
        {user.position}
      </p>

      <p className="card_info">
        {user.email}
      </p>

      <p className="card_info">
        {user.phone}
      </p>
    </article>
  );
};
