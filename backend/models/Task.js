//A data model using Schema Interface to represent the Post. 
// Variables
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define a schema
let TasksSchema = new Schema({   //Title & content for creating and listing data
    task_name: {
        type: String,
        required: true
    },
    note: {
        type: String,
    },
    priority: {
        type: Number
    },
    date: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
    } //Used for updating if the task is complete
});

// Compile model from schema
module.exports = mongoose.model('Task', TasksSchema);
