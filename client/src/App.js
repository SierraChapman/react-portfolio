// import packages
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
// import utils
import API from './utils/API';
import { UPDATE_PROJECTS, LOADING, ERROR } from "./utils/actions";
import { useProjectContext } from "./utils/GlobalState";
// import pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
// import components
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";
// import styling
import './App.css';

function App() {
  const dispatch = useProjectContext()[1];

  // get project data on App load
  useEffect(() => {
    dispatch({ type: LOADING });
    console.log("requesting project data...");

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
      <Router>
        <Navbar />
          <Container className="main">
            <Switch>
              <Redirect exact path="/" to="/projects" />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/projects" component={Projects} />
              <Route component={NoMatch} />
            </Switch>
          </Container> 
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
