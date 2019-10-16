"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogEntrySchema = new Schema({
  PocketID: {
    type: Number,
    required: true
  },
  Owner: {
    type: String,
    required: true
  },
  Bank: {
    type: Number,
    required: true
  },
  Wish: {
    type: String,
    required: true
  },
  Outcome: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("LogEntry", LogEntrySchema);
