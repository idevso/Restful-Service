const express = require("express");
const { route } = require("./router");
const app = express();
const router = require("./router");
const port = process.env.PORT || 5000;

app.use(router);

app.listen(port, console.log("Running at port " + port));