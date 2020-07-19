const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./User')
require('./Entry')

app.use(bodyParser.json())

const User = mongoose.model('user', 'user')
const Entry = mongoose.model('entry')

const mongoURL = "mongodb+srv://test-user:gl4dBJI46gfgPwoR@cluster0-n1cb7.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.set('useCreateIndex', true);

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo')
})

mongoose.connection.on('error', (error) => {
    console.log('Error', error)
})

mongoose.connection.on('disconnected', () => {
    console.log('Dissconnected from mongo');
});

app.get('/', (req, res) => {
    User.find({}).then(data => {
        res.send(data)
    }).catch(error => {
        console.log(error)
    })
})

app.post('/send-user', (req, res) => {
    //console.log(req.body)
    const userData = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        entries: req.body.entries
    })

    const user = new User(userData)
    user.save().then(user => {
        if (user) {
            console.log(user)
            res.send('Success')
            return user.generateAuthToken();
        } else {
            res.sendStatus(400);
        }
    }).then((token) => {
        res.header({"x-auth": token}).send(user);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

app.post('/delete-user', (req, res) => {
    User.findByIdAndRemove(req.body.id)
        .then(data => {
            console.log(data)
            res.send('User Deleted')
        }).catch(error => {
            res.send(error)
        })
})

app.post('/update-user', (req, res) => {
    User.findByIdAndUpdate(req.body.id, {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    }).then(data => {
        console.log(data)
        res.send('User updated')
    }).catch(error => {
        console.log(error)
    })
})


app.post('/login', (req, res) => {
    User.findUserByCredentials(req.body.email, req.body.password)
      .then(user => {
        return user.generateAuthToken().then(token => {
          res.header("x-auth", token).json(user);
        });
      })
      .catch(error => {
        res.status(400).json({ message: "Invalid credentials." });
      });
})

app.listen(3000, () => {
    console.log('Server Running')
})

/*
{
	"profile": {
    	"name": "Jack Williams",
    	"email": "Jackwilliams1998@hotmail.com",
    	"password": "password"

	},
    "entries": [{
        "entryTitle": "Test Entry",
        "when": "27-05-2020",
        "where": "Park",
        "who": "Mum",
        "what": "We went for a walk and there was a stranger behind us",
        "emotions": [{
            "emotion": "Scared",
            "rating": "80",
            "key": "1"
        },
        {
            "emotion": "Anxious",
            "rating": "40",
            "key": "2"
        }
        ],
        "worry": "The stranger behind is dangerous",
        "typeOfWorry": "Practical",
        "prediction": "We are going to get attacked"
    }]
}

*/