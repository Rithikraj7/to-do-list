const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const TodoTask = require("./models/TodoTask");
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit the process with a non-zero code
    });

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception:", error);
    process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (error) => {
    console.error("Unhandled Promise Rejection:", error);
    process.exit(1);
});

app.get("/remove/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await TodoTask.findByIdAndRemove(id);
        res.redirect("/todo");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while removing the task");
    }
});

app.post("/", async (req, res) => {
    try {
        const todoTask = new TodoTask({
            content: req.body.content,
        });
        await todoTask.save();
        res.redirect("/todo");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/edit/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const tasks = await TodoTask.find({});
        res.render("toDoUpdate.ejs", { todoTasks: tasks, idTask: id });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/edit/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await TodoTask.findByIdAndUpdate(id, { content: req.body.content });
        res.redirect("/todo");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/error", (req, res) => {
    const error = "An error occurred";
    res.render("todo.ejs", { error });
});



app.get("/todo", async (req, res) => {
    try {
        const tasks = await TodoTask.find({});
        res.render("todo.ejs", { todoTasks: tasks });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/error", (req, res) => {
    const error = "An error occurred";
    res.render("error.ejs", { error });
});

app.post("/form", (req, res) => {
    // Perform some form validation or processing
    if (someErrorCondition) {
        const errors = [{ msg: "An error occurred" }];
        res.render("error.ejs", { errors });
    } else {
        // Success case
        res.send("Form submitted successfully");
    }
});
