const List = require("../models/List");
const mongoose = require("mongoose");
const createTask = async (req, res) => {
  console.log(req.body);
  if (req.body.title) {
    try {
      const list = new List({
        title: req.body.title,
        description: req.body.description,
      });
      await list.save();
      res.status(200).json(list);
    } catch (error) {
      res.json({ message: "error occurred while saving task" });
    }
  } else {
    res.json({ message: "give valid title" });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const data = await List.find({});
    console.log("requested for tasks");
    console.log(data);
    res.json({ data });
  } catch (error) {
    res.json({ message: "error while getting all the tasks from database" });
  }
};

const updateTask = async (req, res) => {
  const title = req.body.title;
  if (title) {
    try {
      const existingTask = await List.findOne({ title });

      if (existingTask) {
        if (!existingTask.completed) {
          // Update the task only if completed is currently false
          await List.findOneAndUpdate({ title }, { completed: true });
          res.json({ message: "Updated the task" });
          console.log("Updated the task");
        } else {
          res.json({ message: "Task is already marked as completed" });
          console.log("Task is already marked as completed");
        }
      } else {
        res.json({ message: "Task not found" });
        console.log("Task not found");
      }
    } catch (error) {
      res.json({
        message: "Unable to update the completed status of the task",
      });
      console.log("Unable to update the completed status of the task");
    }
  } else {
    res.json({ message: "Enter a valid title" });
    console.log("Enter a valid title");
  }
};
const deleteTask = async (req, res) => {
  console.log("deleting in backend");
  const { title } = req.query; // Retrieve taskTitle from URL parameter
  console.log(title);
  console.log(title);
  if (title) {
    try {
      const deleted = await List.findOneAndDelete({ title: title });
      res.status(200).json({ message: "deleted" });
      console.log("deleted the task");
    } catch (error) {
      console.log("error occuredd when deleting the task");
    }
  } else {
    res.json({ message: "input valid title" });
  }
};
module.exports = { createTask, getAllTasks, updateTask, deleteTask };
