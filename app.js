const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();
const moviesRoute = require("./routes/movies-route");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use("/api/movies", moviesRoute);

module.exports = {
  app
};
