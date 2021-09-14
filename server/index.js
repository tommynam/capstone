const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
require("dotenv").config();

//REQUIRING SERVICE/ROUTERS
const loginRouter = require("./routes/loginRouter")

//KNEX SETUP
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("combined"));


//Redirect URLs to their respective router files
app.use("/login", loginRouter);



//PORT
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Application listening to port "+ port);
});