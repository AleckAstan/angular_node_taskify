//Variables
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

//ALLOW ACCESS-CONTROL -  added the following lines to your server to avoid a CORS error
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS"); //Needed to stop access control error with methods
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//ROUTES 
/**
 * @title GET REQUEST, find().
 * @desc gets all tasks data from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.get('/tasks/:isComplete', function (req, res) {
    Task.find({
        isComplete: req.params.isComplete
    }, function (err, tasks) { //function take error argument to handle any errors. Second parameters is data coming back from the server.
        if (err) return res.status(500).send("There was a problem finding the tasks.");
        res.status(200).send(tasks);
        console.log("\nRetrieved tasks from database:\n");
    });//End .find
});//End GET REQUEST

/**
 * @title CREATE POST REQUEST.
 * @desc posts the created task data to the database.
 * @note pass a spread of docs and a callback. Logs the data to the server console.
 */
router.post('/tasks', function (req, res, err) {
    //Wrap in a response to be used to display message on server console.
    let response = {
        task_name: req.body.task_name,
        note: req.body.note,
        priority: req.body.priority,
        date: req.body.date,
        isComplete: req.body.isComplete
    };
    console.log('\nTask added!\n', response, '\n'); // Display response

    //Create post with 'title' & 'content' delivered to uMabDB
    Task.create({
        task_name: req.body.task_name,
        note: req.body.note,
        priority: req.body.priority,
        date: req.body.date,
        isComplete: req.body.isComplete
    }, function (err, task) { //function take error argument to handle any errors. Second parameters is data coming back from the server.
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        //Saved!
        res.status(200).send(task);//End res.status.json
    });//End create
});//End POST REQUEST function

/**
 * @title DELETE REQUEST, findByIdAndRemove().
 * @desc deletes a task by its id number from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.delete('/tasks/:id', function (req, res) {
    Task.findByIdAndRemove(
        req.params.id
        , function (err, task) { //function take error argument to handle any errors. Second parameters is data coming back from the server.
            if (err) return res.status(500).send("There was a problem deleting the task.");
            res.status(200).json("Task " + task.task_name + " was deleted.");
            console.log('\nDeleted tasks from database\n'); //Log the delete
        });
});//End DELETE REQUEST

/**
 * @title GET REQUEST, findById()
 * @desc gets a task by its id number from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.get('/tasks/edit/:id', function (req, res) {
    Task.find({ //findById() method returns data a different way to find()
        _id: req.params.id
    },
        function (err, task) { //function take error argument to handle any errors. Second parameters is data coming back from the server.
            if (err) return res.status(500).send("There was a problem finding the task.");
            if (!task) return res.status(404).send("No task found.");
            res.status(200).send(task);
            console.log('\nTask found from database\n'); //Log the delete
        });
});// End GET REQUEST

/**
 * @title PUT REQUEST, findByIdAndUpdate().
 * @desc finds a task by its id number in the database and updates it.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.put('/tasks/edit/:id', function (req, res) {
    Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        function (err, task) { //function take error argument to handle any errors. Second parameters is data coming back from the server.
            if (err) return res.status(500).send("There was a problem updating the task.");
            res.status(200).send(task);
            console.log('\nTask updated in database\n'); //Log the delete
        });
});// End PUT REQUEST

/**
 * @title PUT REQUEST, findByIdAndUpdate().
 * @desc finds a task by its id number in the database and updates it.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.put('/tasks/update/:id', function (req, res) {
    Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        function (err, task) { //function take error argument to handle any errors. Second parameters is data coming back from the server.
            if (err) return res.status(500).send("There was a problem updating the task.");
            res.status(200).send(task);
            console.log('\nTask status has been updated in database\n', task); //Log the delete
        });
});// End PUT REQUEST

/**
 * @title PUT REQUEST, findByIdAndUpdate().
 * @desc finds a task by its id number in the database and updates it.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.put('/tasks/update/note/:id', function (req, res) {
    Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        function (err, task) { //function take error argument to handle any errors. Second parameters is data coming back from the server.
            if (err) return res.status(500).send("There was a problem updating the task.");
            res.status(200).send(task);
            console.log('\nTask status has been updated in database\n', task); //Log the delete
        });
});// End PUT REQUEST

/**
 * @title PUT REQUEST, findByIdAndUpdate().
 * @desc finds a task by its id number in the database and updates it.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.put('/tasks/update/priority/:id', function (req, res) {
    Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        function (err, task) { //function take error argument to handle any errors. Second parameters is data coming back from the server.
            if (err) return res.status(500).send("There was a problem updating the task.");
            res.status(200).send(task);
            console.log('\nTask status has been updated in database\n', task); //Log the delete
        });
});// End PUT REQUEST

/**
 * @title GET REQUEST, find().
 * @desc gets all tasks data for the current date from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.get('/tasks/today/:todaysDate', function (req, res) {
    //TO-DO Make a request to get all the task for current date(today's date) compare passed values date with the databases date
    console.log(req.params.todaysDate);
    Task.find({
        date: req.params.todaysDate //TO-DO MAKE SURE WHEN MARKED COMPLETE IT REMOVES FROM TODAY LIST OR ADDS TICK
    }, function (err, tasks) { //function take error argument to handle any errors. Second parameters is data coming back from the server.
        if (err) return res.status(500).send("There was a problem finding the tasks for the current date(today).");
        res.status(200).send(tasks);
        console.log("\nRetrieved all current tasks from database:\n");
    });//End .find
});//End GET REQUEST

// Export router as a module.
module.exports = router;
