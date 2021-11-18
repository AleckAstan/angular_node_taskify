const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

router.get("/tasks/:isComplete", function(req, res) {
    Task.find({
            isComplete: req.params.isComplete,
        },
        function(err, tasks) {
            if (err)
                return res.status(500).send("There was a problem finding the tasks.");
            res.status(200).send(tasks);
            console.log("\nRetrieved tasks from database:\n");
        }
    );
});

router.post("/tasks", function(req, res, err) {
    let response = {
        task_name: req.body.task_name,
        note: req.body.note,
        priority: req.body.priority,
        date: req.body.date,
        isComplete: req.body.isComplete,
    };
    console.log("\nTask added!\n", response, "\n");

    Task.create({
            task_name: req.body.task_name,
            note: req.body.note,
            priority: req.body.priority,
            date: req.body.date,
            isComplete: req.body.isComplete,
        },
        function(err, task) {
            if (err)
                return res
                    .status(500)
                    .send("There was a problem adding the information to the database.");

            res.status(200).send(task);
        }
    );
});

router.delete("/tasks/:id", function(req, res) {
    Task.findByIdAndRemove(req.params.id, function(err, task) {
        if (err)
            return res.status(500).send("There was a problem deleting the task.");
        res.status(200).json("Task " + task.task_name + " was deleted.");
        console.log("\nDeleted tasks from database\n");
    });
});

router.get("/tasks/edit/:id", function(req, res) {
    Task.find({
            _id: req.params.id,
        },
        function(err, task) {
            if (err)
                return res.status(500).send("There was a problem finding the task.");
            if (!task) return res.status(404).send("No task found.");
            res.status(200).send(task);
            console.log("\nTask found from database\n");
        }
    );
});

router.put("/tasks/edit/:id", function(req, res) {
    Task.findByIdAndUpdate(
        req.params.id,
        req.body, { new: true },
        function(err, task) {
            if (err)
                return res.status(500).send("There was a problem updating the task.");
            res.status(200).send(task);
            console.log("\nTask updated in database\n");
        }
    );
});

router.put("/tasks/update/:id", function(req, res) {
    Task.findByIdAndUpdate(
        req.params.id,
        req.body, { new: true },
        function(err, task) {
            if (err)
                return res.status(500).send("There was a problem updating the task.");
            res.status(200).send(task);
            console.log("\nTask status has been updated in database\n", task);
        }
    );
});

router.put("/tasks/update/note/:id", function(req, res) {
    Task.findByIdAndUpdate(
        req.params.id,
        req.body, { new: true },
        function(err, task) {
            if (err)
                return res.status(500).send("There was a problem updating the task.");
            res.status(200).send(task);
            console.log("\nTask status has been updated in database\n", task);
        }
    );
});

router.put("/tasks/update/priority/:id", function(req, res) {
    Task.findByIdAndUpdate(
        req.params.id,
        req.body, { new: true },
        function(err, task) {
            if (err)
                return res.status(500).send("There was a problem updating the task.");
            res.status(200).send(task);
            console.log("\nTask status has been updated in database\n", task);
        }
    );
});

router.get("/tasks/today/:todaysDate", function(req, res) {
    console.log(req.params.todaysDate);
    Task.find({
            date: req.params.todaysDate,
        },
        function(err, tasks) {
            if (err)
                return res
                    .status(500)
                    .send(
                        "There was a problem finding the tasks for the current date(today)."
                    );
            res.status(200).send(tasks);
            console.log("\nRetrieved all current tasks from database:\n");
        }
    );
});

module.exports = router;