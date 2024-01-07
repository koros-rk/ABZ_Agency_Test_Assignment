import React from 'react';
import './PersonList.scss';
import { Card } from '../../components/Card/Card';
import { Button } from '../../shared/Button/Button';

export const PersonList: React.FC = () => {
  return (
    <section className="list">
      <h2 className="list_item list_item--title">Working with GET request</h2>
      <div className="list_item list_item--container">
        <Card
          user={{
            email: '',
            name: '',
            phone: '',
            photo: '',
            position: '',
            id: 1,
          }}
        />
        <Card
          user={{
            email: '',
            name: '',
            phone: '',
            photo: '',
            position: '',
            id: 1,
          }}
        />
        <Card
          user={{
            email: '',
            name: '',
            phone: '',
            photo: '',
            position: '',
            id: 1,
          }}
        />
        <Card
          user={{
            email: '',
            name: '',
            phone: '',
            photo: '',
            position: '',
            id: 1,
          }}
        />
        <Card
          user={{
            email: '',
            name: '',
            phone: '',
            photo: '',
            position: '',
            id: 1,
          }}
        />
        <Card
          user={{
            email: '',
            name: '',
            phone: '',
            photo: '',
            position: '',
            id: 1,
          }}
        />
        <Card
          user={{
            email: '',
            name: '',
            phone: '',
            photo: '',
            position: '',
            id: 1,
          }}
        />
        <Card
          user={{
            email: '',
            name: '',
            phone: '',
            photo: '',
            position: '',
            id: 1,
          }}
        />
      </div>
      <Button type="anchor" className="list_item list_item--button">
        Show more
      </Button>
    </section>
  );
};
