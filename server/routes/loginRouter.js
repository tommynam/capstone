const express = require("express");

class loginRouter {
    constructor() {
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

    };
};

module.exports = loginRouter;