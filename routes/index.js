var express = require("express");
var router = express.Router();

const mu = require("../db/MongoUtils.js");

/* GET home page. */
router.get("/", function(req, res, next) {
  mu.listar().then(db => {
    console.log("bases", db.databases);
    res.render("index", { dbs: db.databases });
  });
});

module.exports = router;
