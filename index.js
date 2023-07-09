const express = require("express");
const cors = require("cors");
require("./database/conn");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000; // server port

const server = app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});

server.timeout = 120000;
