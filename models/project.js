const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  rank: Number, // ordor to display on page
  title: String,
  description: String,
  image: String, // name of image file
  url: String, // deployed link
  repo: String, // link to GitHub repository
  tags: [String], // skills/technologies used
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
