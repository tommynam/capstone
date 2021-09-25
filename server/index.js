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


//LOGIN WITH FACEBOOK
app.post("/login/facebook", (req,res) => {
  if (req.body.access_token) {
    var accessToken = req.body.access_token;

    axios.get(`https://graph.facebook.com/me?access_token=${accessToken}`)
     .then((data) => {
       if (!data.data.error) {
         var payload = {
           id: accessToken
         };
         users.push({
           id: accessToken, // better to use DB auto increment ID
           name: "Facebook User", // better to use data or profile to check the facebook user name
           email: "placeholder email", // better to use data or profile to check the email
           password: ""
         })
         //RETURN JWT TOKEN AFTER CHECKING
         var token = jwt.encode(payload, config.jwtSecret);
         res.json({
           token: token // optionally provide also the user id to frontend
         });
       } else {
        res.sendStatus(401);
       }
     }).catch((err) => {
       console.log(err);
       res.sendStatus(401);
     });
  }else{
    res.sendStatus(401);
  }
});

//LISTEN TO PORT
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Application listening to port "+ port);
});

module.exports.app = app;