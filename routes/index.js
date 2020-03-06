var express = require("express");
var router = express.Router();

const mu = require("../db/MongoUtils.js");

/* GET home page. */
router.get("/", function(req, res, next) {
  mu.listar().then(db => res.render("index", { dbs: db.databases }));
});

router.get("/db/:query", (req, res) => {
  mu.coleccion(req.params.query).then(colections => res.json(colections));
});

router.get("/col/:query", (req, res) => {
  const par = req.params.query.split("_");
  mu.registros(par[0], par[1]).then(registros => res.json(registros));
});

router.post("/:query", (req, res) => {
  mu.crear(req.body, req.params.query);
  res.redirect("/");
});

router.get("/xml", (req, res) => {
  res.render("XMLTest.ejs");
});
module.exports = router;
