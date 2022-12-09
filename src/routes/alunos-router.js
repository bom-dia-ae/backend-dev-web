const express = require("express");
const router = express.Router();
const AlunosController = require("../controllers/alunos-controller");

router.post("/", AlunosController.create);
router.delete("/", AlunosController.delete);
router.post("/:cpf", AlunosController.update);
router.get("/:cpf", AlunosController.get);
module.exports = router;
