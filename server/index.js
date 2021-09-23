//IMPORT MODULES
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
//REQUIRE JWT/LOGIN API
const jwt = require("jsonwebtoken");
const config = require("./config");

//REQUIRE DOT ENV
require("dotenv").config();

//REQUIRING SERVICE/ROUTERS
const LoginRouter = require("./routes/loginRouter");
const LoginService = require("./services/loginService");

//IMPORT AUTH
const auth = require("./auth");

//KNEX SETUP / CONNECTION
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

//INITIALIZE MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(auth.initialize());

//NOTE ROUTER/NOTE SERVICE CALL
const loginService = new LoginService(knex);

//ROUTES
app.use("/login", new LoginRouter(loginService).router());

app.use("example", auth.authenticate(), (new Router(service)).router);


//LISTEN TO PORT
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Application listening to port "+ port);
});

module.exports.app = app;