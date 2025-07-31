const mongoose = require("mongoose");


//for connectt to mongodb using mongoose
const appSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("DbTask", appSchema);
