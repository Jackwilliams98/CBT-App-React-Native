const mongoose = require('mongoose')

const EntrySchema = new mongoose.Schema({
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
        key: String
    }],
    worry: String,
    typeOfWorry: String,
    prediction: String
})

mongoose.model('entry', EntrySchema, 'entry')