const express = require("express");
const router = express.Router();
const BoletimController = require("../controllers/boletim-controller");

router.post("/", BoletimController.create);
router.delete("/", BoletimController.delete);
router.get("/:id", BoletimController.get);
router.post("/:id", BoletimController.update);
module.exports = router;
