const express = require("express");
const router = express.Router();
const Turmaontroller = require("../controllers/turma-controller");

router.post("/", Turmaontroller.create);
router.delete("/", Turmaontroller.delete);
router.get("/:id", Turmaontroller.get);
router.post("/:id", Turmaontroller.update);
module.exports = router;
