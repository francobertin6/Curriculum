import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './portfolio/portfolio.css'
import ABOUT_ME from './about-me/about_me';
import PersonalData from './personalData/PersonalData';
import Skills from './skills/skills';
import Education from './education/education';
import Portfolio from './portfolio/portfolio';
import Contacts from './contacts/contacts';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ABOUT_ME />
    <PersonalData />
    <Skills />
    <Education />
    <Portfolio />
    <Contacts />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
