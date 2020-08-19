import axios from "axios";

export default {
    // Should return all projects as JSON
    getProjects: function() {
        return axios.get("/api/projects");
    },
};