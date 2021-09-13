const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
require("dotenv").config();

//REQUIRING SERVICE/ROUTERS
const DBService = require("./services");
const DBRouter = require("./routes");

//KNEX SETUP
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("combined"));

///////

const knexService = new DBService(knex);

app.use("/users/", new DBRouter(Service).router());



//PORT
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Application listening to port "+ port);
});