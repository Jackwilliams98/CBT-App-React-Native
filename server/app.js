const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./User')

app.use(bodyParser.json())

const User = mongoose.model("user")
const authenticate = require('./middleware/authenticate');

const mongoURL = "mongodb+srv://test-user:gl4dBJI46gfgPwoR@cluster0-n1cb7.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.set('useCreateIndex', true);

//Check is the connection is successfull or not via console log
mongoose.connection.on("connected", () => {
    console.log("Connected to database")
})

mongoose.connection.on("error", (err) => {
    console.log(err)
})

//Route to get all users in database
app.get('/get-all-users', (req, res) => {
    User.find({}).then(data => {
        console.log(data)
        res.send(data)
    })
})

//Used with the app to retrieve the newest user with a limit of 1
//This is to showcase what the application should show
app.get('/get-newest-user', (req, res) => {
    User.find().sort({ _id: -1 }).limit(1)
        .then(data => {
            res.send(data)
        })
})

app.get('/get-newest-user-entries', (req, res) => {
    User.find().sort({ _id: -1 }).limit(1)
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                const entry = data[i];
                console.log(entry.entries)
                res.send(entry.entries)
            }
        })
})

app.post('/create-new-entry', (req, res) => {
    const newEntry = {
        entries: req.body.entries
    }
    User.find().sort({ _id: -1 }).limit(1)
        .then(data => {
            data.push(newEntry)
            res.send(newEntry)
        })
})

//Route to create a new user
//Takes in new user data, generates auth token and hashes password
//This is to make sure the users password is never stored as string in the database
app.post('/create-user', (req, res) => {
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        entries: req.body.entries
    }
    const user = new User(userData)
    user.save()
        .then((user) => {
            if (user) {
                return user.generateAuthToken();
            } else {
                res.sendStatus(400)
            }
        }).then((token) => {
            res.header({ "x-auth": token }).send(user);
        }).catch((error) => {
            res.status(400).send(error)
        })
})

//Route to delete user
app.post('/delete-user', (req, res) => {
    User.findByIdAndRemove(req.body._id)
        .then(data => {
            console.log(data)
            res.send("User Deleted")
            res.send(data)
        }).catch(error => {
            console.log(error)
        })
})

//Route to update the user
app.post('/update-user', (req, res) => {
    //When updating a user, make sure to send all information
    //to the server to not change any value to null
    User.findByIdAndUpdate(req.body._id, {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
        .then(data => {
            console.log(data)
            res.send("User Updated")
            res.send(data)
        }).catch(error => {
            console.log(error)
        })
});

//Find user based off of their ID
app.get('/get-userID', (req, res) => {
    User.findById(req.body._id)
        .then(data => {
            console.log(data)
            res.send(data)
        }).catch(error => {
            console.log(error)
        })
})

//find user by token
app.get('/get-user', authenticate, (req, res) => {
    res.send(req.user)
})

//Check the users email and hashed password are matching one in the database
//Produce an auth token for new login
app.post('/login', (req, res) => {
    User.findUserByCredentials(req.body.email, req.body.password)
        .then((user) => {
            if (!user) {
                console.log('No user found')
            } else {
                user.generateAuthToken()
                    .then((token) => {
                        res.header({ "x-auth": token }).send(user);
                    });
            }
        });

});

//Route to log  user out, removing auth token
app.delete('/logout', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send("User logged out");
    }).catch(() => {
        res.status(401).send();
    })
})

//Check if server is running via console
app.listen(3000, () => {
    console.log('Server Running')
})