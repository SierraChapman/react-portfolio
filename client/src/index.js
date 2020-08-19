import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProjectProvider } from "./utils/GlobalState";

ReactDOM.render(
  <React.StrictMode>
    <ProjectProvider>
      <App />
    </ProjectProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
