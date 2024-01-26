const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    const connection = await mongoose.connect(process.env.URL);
    console.log("successfully connected");
  } catch (error) {
    console.log(error);
  }
};

connect();
