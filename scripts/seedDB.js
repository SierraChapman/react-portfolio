const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Projects collection and inserts the projects below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/react-portfolio");

const projectSeed = [
  {
    rank: 1,
    title: "HIKR",
    description: "This is a full stack application for finding and logging hikes. Users are able to create an account, search for hikes by location, and write notes about their trip.",
    image: "hikr.png",
    url: "https://hikr-journal.herokuapp.com/",
    repo: "https://github.com/SierraChapman/hikr",
    tags: [
      "Backend",
      "Teamwork",
      "JavaScript",
      "Git",
      "GitHub",
      "Heroku",
      "MySQL",
      "JawsDB",
      "Node.js",
      "Axios",
      "Bcryptjs",
      "Express.js",
      "Express-Handlebars",
      "Express-Session",
      "Sequelize",
      "Public API's",
    ],
  },
  {
    rank: 2,
    title: "Clicky Game",
    description: "The Clicky Game is a React application where users score points by clicking images they haven't clicked before and have to start over if they click the same image twice.",
    image: "clicky-game.png",
    url: "https://sierrachapman.github.io/clicky-game/",
    repo: "https://github.com/SierraChapman/clicky-game",
    tags: [
      "Frontend",
      "Web Design",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "React",
      "Bootstrap",
    ],
  },
  {
    rank: 3,
    title: "Reading List",
    description: "This full-stack reading list application uses Express.js to program the server, Express-Handlebars to generate HTML pages, and MySQL to store data.",
    image: "reading-list.png",
    url: "https://reading-list-sc.herokuapp.com/",
    repo: "https://github.com/SierraChapman/reading-list",
    tags: [
      "Frontend",
      "Backend",
      "Web Design",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Git",
      "GitHub",
      "Heroku",
      "MySQL",
      "JawsDB",
      "jQuery",
      "Node.js",
      "Express.js",
      "Express-Handlebars",
    ],
  },
  {
    rank: 4,
    title: "L.I.F.E.",
    description: "Living Inside For Ever (L.I.F.E.) is intended to be a one stop shop for finding activities to do while following stay-at-home orders. It currently includes movies, video games, and recipes.",
    image: "life.png",
    url: "https://sierrachapman.github.io/life",
    repo: "https://github.com/SierraChapman/life",
    tags: [
      "Frontend",
      "Teamwork",
      "HTML",
      "JavaScript",
      "Git",
      "GitHub",
      "Materialize.css",
      "jQuery",
      "Axios",
      "Public API's",
    ],
  },
  {
    rank: 5,
    title: "Code Quiz",
    description: "This project implements a timed multiple-choice quiz game. The score depends on the time remaining at the end and the number of incorrect answers. A high score list is stored locally on the browser.",
    image: "code-quiz.png",
    url: "https://sierrachapman.github.io/code-quiz/",
    repo: "https://github.com/SierraChapman/code-quiz",
    tags: [
      "Frontend",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
    ],
  },
  {
    rank: 6,
    title: "Weather Dashboard",
    description: "This weather dashboard displays current and forecasted weather from the OpenWeather API. The user can search for cities or select them from a list of recently viewed cities.",
    image: "weather-dashboard.png",
    url: "https://sierrachapman.github.io/weather-dashboard/",
    repo: "https://github.com/SierraChapman/weather-dashboard",
    tags: [
      "Frontend",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "Bootstrap",
      "jQuery",
      "Public API's",
    ],
  },
];

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
