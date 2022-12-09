const express = require("express");
const router = express.Router();
const ProfessorController = require("../controllers/professor-controller");

router.post("/", ProfessorController.create);
router.delete("/", ProfessorController.delete);
router.post("/:cpf", ProfessorController.update);
router.get("/:cpf", ProfessorController.get);
module.exports = router;
