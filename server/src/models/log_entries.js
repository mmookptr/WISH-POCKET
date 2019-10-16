"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogEntrySchema = new Schema({
  no: {
    type: Number,
    required: true
  },
  income: {
    type: Number,
    required: true
  },
  fixedutcome: {
    type: Number,
    required: true
  },
  wishlist: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model("LogEntry", LogEntrySchema);
