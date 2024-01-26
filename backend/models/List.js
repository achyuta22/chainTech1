const express = require("express");
const mongoose = require("mongoose");
const textModel = mongoose.Schema({
  category: String,
  title: String,
  description: String,
  details: {
    type: String,
    default: "",
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const List = mongoose.model("Chat", textModel);
module.exports = List;
