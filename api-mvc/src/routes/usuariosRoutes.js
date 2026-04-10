const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");

router.get("/", usuariosController.getUsuarios);
router.post("/", usuariosController.postUsuarios);
router.get("/", usuariosController.getUserId);
router.put("/", usuariosController.putUsuarios);
router.delete("/", usuariosController.deleteUsuarios);

module.exports = router;
