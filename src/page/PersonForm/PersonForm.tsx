import React from 'react';
import './PersonForm.scss';
import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/FormFields/Input/Input';
import { Radio } from '../../shared/Radio/Radio';
import { Textarea } from '../../shared/FormFields/Input/Textarea';

export const PersonForm: React.FC = () => {
  return (
    <section className="form">
      <h2 className="form_title">Working with POST request</h2>
      <form action="" className="form_container">
        <Input label="Your name"></Input>
        <Input label="Email"></Input>
        <Input label="Phone"></Input>
        <div className="form_radio_group">
          <p>Select your position</p>
          <Radio name="position" value="Frontend developer" checked />
          <Radio name="position" value="Backend developer" />
          <Radio name="position" value="Designer" />
          <Radio name="position" value="QA" />
        </div>
        <Textarea onSubmit={() => {}} />
      </form>
      <Button type="submit" className="form_button">Sing Up</Button>
    </section>
  );
};
