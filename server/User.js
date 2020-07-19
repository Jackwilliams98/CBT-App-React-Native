const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const _ = require('lodash');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            require: true
        }
    }],
    entries: [{
        inputDate: {
            type: Date,
            default: Date.now
        },
        entryTitle: String,
        when: String,
        where: String,
        who: String,
        what: String,
        emotions: [{
            emotion: String,
            rating: String,
            key: String,
        }],
        worry: String,
        typeOfWorry: String,
        prediction: String
    }]
})

UserSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    return _.pick(userObject, ["_id", "email", "name", "entries"]);
}

UserSchema.methods.generateAuthToken = function () {
    const user = this;
    const access = "auth";

    const token = jwt.sign({ _id: user._id.toHexString(), access }, 'ASDFGHJKL123').toString();

    user.tokens.push({ access, token });

    return user.save().then(() => {
        return token;
    })
}

UserSchema.statics.findUserByCredentials = function (email, password) {
    const User = this;
    return User.findOne({email}).then((user) => {
        if (!user) {
            Promise.reject(new Error('User Not Found'))
            .catch((err) => {
                console.log(err)
            });
        } else {
            return new Promise((resolve, reject) => {
                bcrypt.compare(password, user.password, (err, res) => {
                    if (res) {
                        resolve(user);
                    } else {
                        reject();
                    }
                })
            })
        }
    });
}

UserSchema.statics.findUserByToken = function(token) {
    const User = this;
    let decoded;

    try {
        decoded = jwt.verify(token, 'ASDFGHJKL123');
    } catch (error) {
        return Promise.reject();   
    }

    return User.findOne({
        "_id": decoded._id,
        "tokens.token": token,
        "tokens.access": "auth"
    });
}

UserSchema.methods.removeToken = function(token) {
    const user = this;

    return user.updateOne({
        $pull: {
            tokens: {token}
        }
    })
}

UserSchema.pre("save", function (next) {
    const user = this;
    if (user.isModified("password")) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(user.password, salt, function (err, hash) {
                // Store hashed password in database
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

mongoose.model("user", UserSchema, "user")