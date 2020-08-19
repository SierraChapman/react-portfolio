import React, { useEffect } from 'react';
import './App.css';
import API from './utils/API';
import { UPDATE_PROJECTS, LOADING, ERROR } from "./utils/actions";
import { useProjectContext } from "./utils/GlobalState";

function App() {
  const [state, dispatch] = useProjectContext();

  // get project data on App load
  useEffect(() => {
    dispatch({ type: LOADING });
    console.log("retrieving project data...");

    API.getProjects()
      .then(res => {
        console.log("received data for " + res.data.length + " projects");
        dispatch({ type: UPDATE_PROJECTS, projects: res.data});
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR, error: "An error occurred. Please try again later." });
      });
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Sierra Chapman</h1>
      <h2>React Portfolio</h2>
    </div>
  );
}

export default App;
