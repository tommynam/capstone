const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

//REQUIRING SERVICE/ROUTERS
const Service = require("./service");
const Router = require("./router");

//KNEX SETUP
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

//app = express
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("combined"));

///////

const knexService = new Service(knex);

app.use("/api/users/", new Router(Service).router());

app.listen(8080, () => {
  console.log("Application listening to port 8080");
});