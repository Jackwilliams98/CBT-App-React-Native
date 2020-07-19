const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

UserSchema.methods.generateAuthToken = function () {
    const user = this;
    const access = "auth";

    const token = jwt.sign({ _id: user._id.toHexString(), access }, 'ASDFGHJKL123').toString();

    user.tokens.push({ access, token });

    return user.save().then(() => {
        return token;
    });
}

UserSchema.pre("save", function (next) {
    const user = this;

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            // Store hash in your password DB
            user.password = hash;
            next();
        });
    });
})


UserSchema.statics.findUserByCredentials = function (email, password) {
    const User = this;

    function resolved(result) {
        console.log('Resolved');
    }

    function rejected(result) {
        console.error(result);
    }

    console.log({ email })

    return User.findOne().then((user) => {
        console.log(user)
        if (!user) {
            return Promise.reject(new Error('No user found')).then(resolved, rejected)
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
    })
}

mongoose.model('user', UserSchema, 'user')