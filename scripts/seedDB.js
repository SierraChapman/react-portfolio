const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Projects collection and inserts the projects below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio");

const projectSeed = []; // THE ARRAY OF PROJECT DATA GOES HERE

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
