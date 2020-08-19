import React, { createContext, useReducer, useContext } from "react";
import {
  UPDATE_PROJECTS,
  LOADING,
  ERROR
} from "./actions";

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
    projects: value, // projects saved in MongoDB
    loading: false,
    error: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useProjectContext = () => {
  return useContext(ProjectContext);
};

export { ProjectProvider, useProjectContext };