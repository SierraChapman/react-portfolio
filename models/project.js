const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  // PROJECT FIELDS GO HERE
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
