const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");

router.get("/", roleController.get);
router.post("/", roleController.create);
router.delete("/:id", roleController.destroy);
router.put("/:id", roleController.update);

module.exports = router;
