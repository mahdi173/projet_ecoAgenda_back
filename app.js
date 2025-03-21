const express = require('express');
const {connect} = require('./framework/connexion.js');
const sync = require('./framework/sync.js');
const EventRouter = require('./route/event.route.js');
const { dataset } = require('./data/dataset.js');
const cors = require("cors");

const app = express();
app.use(cors());

const database = async () => {
    await connect();
    await sync();
    await dataset();
}

database();

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173", // Replace with your Vue app's URL
        methods: "GET,POST,PUT,DELETE",
        allowedHeaders: "Content-Type,Authorization",
    })
);

app.use('/events', EventRouter);

module.exports = app;