const express = require("express");
const List = require("../models/List");
const router = express.Router();
const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require("../controllers/crud");
// router.use(express.json());
// const bodyParser = require("body-parser");

router.post("/createTask", createTask);
router.get("/allTasks", getAllTasks);
router.put("/completedTask", updateTask);
router.delete("/deleteTask", deleteTask);

module.exports = router;
