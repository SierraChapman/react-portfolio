const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Project.find(req.query)
      .sort({rank: 1}) // sort by ascending rank
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};