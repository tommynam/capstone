const express = require("express");

class loginRouter {
    constructor(loginService) {
        this.loginService = loginService;
    }

    //Router function for the login page - define what program does for get/post/etc...
    router() {
        let router = express.Router();

        router.get("/", this.get.bind((this)));
        router.post("/", this.get.bind((this)));

        return router;
    };

    //Define what the get function does
    get(req,res){

    };

    //Define what the post function does
    post(req,res){
        if(req.body.email && req.body.passowrd) {
            var email = req.body.email;
            var password = req.body.password;

            var user = users.find((user) => {
                return user.email === email && user.password === password;
            });

        if(user) {
            var payload = {
                id: user.id
            };
            var token = jwt.sign(payload, config.jwtSecret);
            res.json({
                token: token
            });
        } else {
            res.sendStatus(401);
        }
        } else {
            res.sendStatus(401);
        }
    };
};

module.exports = loginRouter;