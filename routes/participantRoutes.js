const express = require('express')
const router = express.Router()
const participantController = require('./../controllers/participantController')
const authController = require('./../controllers/authController')

router
.route('/')
.get(authController.protect, participantController.getAllParticipants)
.post(authController.protect, participantController.createParticipant)
router
.route('/:id/card')
.get(authController.protect, participantController.getParticipant)

module.exports = router