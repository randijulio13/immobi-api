const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.get("/", employeeController.get);
router.post("/", employeeController.create);
router.delete("/:id", employeeController.destroy);
router.put("/:id", employeeController.update);

module.exports = router;
