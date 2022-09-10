const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;

// store
exports.create = (req, res) => {
    // validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "content can not be empty"
        });
        return;
    }

    // create
    const post = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    // save di database
    Post.create(post)
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error "
            });
        });
}

// index
exports.findAll = (req, res) => {
    const title = req.query.title;
    let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Post.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "some errors"
            });
        });
};

// show
exports.findOne = (req, res) => {
    const id = req.params.id;

    Post.findByPk(id)
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message: "error post id=" + id
            });
        });
};

// update
exports.update = (req, res) => {
    const id = req.params.id;

    Post.update(req.body, {
        where: { id: id }
    }).then((result) => {
        
        if ( result == 1 ) {
            res.send({
                message: "Post success"
            });
        } else {
            res.send({
                message: `cannot update id=${id}.`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "error update id=" + id
        });
    });
};

// destroy one 
exports.delete = (req, res) => {
    const id = req.params.id;

    Post.destroy({
        where: { id: id }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "post delete success"
            })
        } else {
            res.send({
                message: `cannot delete id=${id}`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "could not delete id=" + id
        })
    });
};

// destroy all
exports.deleteAll = (req, res) => {
    Post.destroy({
        where: {},
        truncate: false
    }).then((result) => {
        res.send({
            message: `${result} post delete success`
        });
    }).catch((err) => {
        res.status(500).send({
            message: 
                err.message || "could not delete id="
        });
    });
}

// find all publish
exports.findAllPublished = (req, res) => {
    Post.findAll({
        where: { published: true }
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "some error"
        });
    });
};