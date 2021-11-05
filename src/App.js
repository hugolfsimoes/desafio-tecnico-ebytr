import React from 'react';
import './App.css';
import Board from './components/Board';
import Form from './components/Form';
import logo from './images/logoEbytr.png';

const App = () => {

  return (
    <div id="container">
      <header id="header-tag">
        <img id="logo-image" src={ logo } alt="Logo da empresa Ebytr" />
        <h2 id="title-h2">Task Manager</h2>
      </header>
      <div id="content-container">
        <aside id="form-field">
          <Form />
        </aside>
        <main id="main-content">
          <Board />
        </main>
      </div>
    </div>

  );
};
export default App;