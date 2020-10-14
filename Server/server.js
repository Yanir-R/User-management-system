const express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
require("./DB/database");
app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());
app.use(express.json())

app.use('/api', require("./Routers/routeUser"));
app.use('/api', require("./Routers/routeTodos"));
app.use('/api', require("./Routers/routePost"));

app.listen(8000);
