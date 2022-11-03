import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Student from './Student';

function App() {
  const stu = {
    message: "Welcome to Fullstack Development - 1",
    title: "React Js Programming Week09 Lab exercise",
    id: "101339585",
    name: "Carlos Arellano",
    college: "George Brown College, Toronto"
  }
  return (
      <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Student student={stu}></Student>
        </header>
      </div>
  );
}

export default App;
