const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/departmentController");

router.get("/", departmentController.get);
router.post("/", departmentController.create);
router.delete("/:id", departmentController.destroy);
router.put("/:id", departmentController.update);

module.exports = router;
