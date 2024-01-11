import React from 'react';
import './App.scss';
import { Navbar } from '../components/Navbar/Navbar';
import { Header } from './Header/Header';
import { PersonList } from './PersonList/PersonList';
import { PersonForm } from './PersonForm/PersonForm';

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Header />
        <PersonList />
        <PersonForm />
      </main>
    </>
  );
};
