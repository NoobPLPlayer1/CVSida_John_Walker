import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GithubProjects from './components/GithubProjects';

ReactDOM.render(
  <React.StrictMode>
    <GithubProjects /> 
  </React.StrictMode>,
  document.getElementById('project_list')
);
