const express = require('express')
const router = express.Router()
const participantController = require('./../controllers/participantController')
const authController = require('./../controllers/authController')

router
.route('/:teamName/members')
.get(authController.protect, participantController.getParticipantsFromTeam)

router
.route('/youngest')
.get(authController.protect, participantController.getYoungestParticipants)

module.exports = router