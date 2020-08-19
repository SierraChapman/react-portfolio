const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// API ROUTES GO HERE
router
  .route("/")
  .get((req, res) => {
    res.json([]);
  });

module.exports = router;
