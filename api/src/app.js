const express = require("express");
const morgan = require('morgan')
const router = require("./routes/index.js");
const cors = require('cors')


const server = express();
server.use(express.json())
server.use(cors())
server.use("/", router);
server.use(morgan("dev"));


module.exports = server;
