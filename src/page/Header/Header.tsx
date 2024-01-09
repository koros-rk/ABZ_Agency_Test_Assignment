import React from 'react';
import './Header.scss';
import { Button } from '../../shared/Button/Button';

export const Header: React.FC = () => {
  return (
    <section className="header">
      <p className="header_title">
        Test assignment for front-end developer
      </p>
      <p className="header_text">
        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS,
        JS with a vast understanding of User design thinking as they&prime;ll be building web
        interfaces with accessibility in mind. They should also be excited to learn, as the
        world of Front-End Development keeps evolving.
      </p>
      <Button
        type="anchor"
        onClick={() => {
          window.location.href = '#addPerson';
        }}
      >
        Sign up
      </Button>
    </section>
  );
};
