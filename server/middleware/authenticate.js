const mongoose = require('mongoose')
require('../User')
const User = mongoose.model("user")

const authenticate = (req, res, next) => {
    var token = req.header("x-auth");
    User.findUserByToken(token).then((user) => {
        if (!user) {
            Promise.reject().catch((err) => {
                res.status(401).send('User Not Recognised');
            })
        } else {
            req.user = user;
            req.token = token;
            next();
        }
    }).catch((err) => {
        res.status(401).send('Not Recognised');
    })
}

module.exports = authenticate;


