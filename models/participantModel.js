const mongoose = require('mongoose')

const participantShema = new mongoose.Schema({
    firstName:{
        type:String,
        required: [true, 'Participant must have a first name'],
        minlength: 2,
        match: /^[a-zA-Z\s]*$/
    },
    lastName:{
        type:String,
        required: [true, 'Participant must have a last name'],
        minlength: 2,
        match: /^[a-zA-Z\s]*$/
    },
    teamName:{
        type:String,
        required:[true, 'Participant must have a team name'],
        match: /^[a-zA-Z0-9\s]*$/,
        required: true
    },
    age:{
        type:Number,
        required:[true, 'Participant must have an age'],
        min:[18,'Ranking must be above 18'],
        max:[40,'Ranking must be bellow 41']
    }
})

const Participant = mongoose.model('Participant', participantShema)

module.exports = Participant;