module.exports = app => {
    const posts = require("../controllers/post.controller.js");

    let router = require("express").Router();

    // route create
    router.post("/", posts.create);

    // route allpost
    router.get("/", posts.findAll);

    // route delete all
    router.get("/published", posts.findAllPublished);
    
    // route sigle post
    router.get("/:id", posts.findOne);
    
    // route update
    router.put("/:id", posts.update);
    
    // route delete by id
    router.delete("/:id", posts.delete);
    
    // route delete all
    router.delete("/", posts.deleteAll);
    

    app.use("/api/posts", router);
}