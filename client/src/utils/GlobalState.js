import React, { createContext, useReducer, useContext } from "react";
import {
  UPDATE_PROJECTS,
  LOADING,
  ERROR
} from "./actions";
import API from "./API";

const ProjectContext = createContext();
const { Provider } = ProjectContext;

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PROJECTS:
      return {
        ...state,
        projects: [...action.projects],
        loading: false,
        error: false,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ERROR:
      console.log(action.error);
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state;
  }
}

const ProjectProvider = ({ value = [], ...props }) => {
  // define state and dispatch
  const [state, dispatch] = useReducer(reducer, {
    projects: [], // projects saved in MongoDB
    loading: false,
    error: false,
  });

  // initialize state with projects from database (asynchronously)
  API.getProjects()
    .then(res => {
      dispatch({ type: UPDATE_PROJECTS, projects: res.data});
    })
    .catch(err => {
      console.log(err);
      // dispatch({ type: ERROR, error: "An error occurred. Please try again later." });
    });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useProjectContext = () => {
  return useContext(ProjectContext);
};

export { ProjectProvider, useProjectContext };