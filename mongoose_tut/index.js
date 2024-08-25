const express = require('express');
const Eventmitter = require("events");
const app = express();

// create event
const event = new Eventmitter();

let count = 0;

event.on("countAPI", () => {
    count++;
    console.log("Event Called", count);
    
})

app.get("/", (req, resp) => {
    resp.send("api called");
    event.emit("countAPI");
});

app.get("/search", (req, resp) => {
    resp.send("search api called");
    event.emit("countAPI");
});

app.get("/update", (req, resp) => {
    resp.send("update api called");
    event.emit("countAPI");
});

app.listen(5000);