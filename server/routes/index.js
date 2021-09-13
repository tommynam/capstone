const express = require("express");

class DBRouter {
  constructor(DBService) {
    this.linkService = DBService;
  }
  router() {
    let router = express.Router();

    router.get("/", this.get.bind(this));
    router.post("/", this.post.bind(this));
    console.log("In the router");

    return router;
  }

  get(req, res) {
    console.log("reached backend");

    return this.DBService
      .list(req.query.search)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.status(500).json(err));
  }

  post(req, res) {
    console.log("reached backend");
    return this.DBService
      .add(req.body)
      .then(() => this.DBService.list())
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = DBRouter;