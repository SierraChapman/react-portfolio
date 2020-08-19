import React from 'react';
import { ProjectProvider } from "./utils/GlobalState";
import './App.css';

function App() {
  return (
    <div className="App">
      <ProjectProvider>
        <h1>Sierra Chapman</h1>
        <h2>React Portfolio</h2>
      </ProjectProvider>
    </div>
  );
}

export default App;
