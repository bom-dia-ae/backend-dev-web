const EscolaController = require("../controllers/escola-controller");
const express = require("express");
const router = express.Router();
router.get("/", EscolaController.get);
module.exports = router;
