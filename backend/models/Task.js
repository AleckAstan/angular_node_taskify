const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TasksSchema = new Schema({
    task_name: {
        type: String,
        required: true,
    },
    note: {
        type: String,
    },
    priority: {
        type: Number,
    },
    date: {
        type: String,
        required: true,
    },
    isComplete: {
        type: Boolean,
    },
});

module.exports = mongoose.model("Task", TasksSchema);