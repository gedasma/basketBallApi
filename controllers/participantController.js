const fs = require('fs')
const Participant = require('./../models/participantModel')
const APIFeatures = require('./../utils/apiTools')
const itemsInPage = 10

exports.getAllParticipants = async (req,res)=>{
    try{
        const participantsData = new APIFeatures(Participant.find(), req.query)
        .limitFields()
        .paginate(itemsInPage)

        const participants = await participantsData.query
        res
        .status(200)
        .json({
            status:'success',
            results:participants.length,
            data:{
              participants
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err.message
        })
    }
    
};
 
exports.createParticipant = async (req, res)=>{
    try{
        const newParticipant = await Participant.create(req.body)
        res
        .status(201)
        .json({
            status:'success',
            message: "New participant created",
            data: newParticipant
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
};
 
exports.getParticipant = async (req,res)=>{
    try{
        const participant = await Participant.findById(req.params.id)
        res
    .status(200)
    .json({
        status:'success',
        data:{
            participant
        }
    })
    }
    catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
 
};

exports.getParticipantsFromTeam = async (req,res)=>{
    req.query.teamName = req.params.teamName
    try{
        const participantsData = new APIFeatures(Participant.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate(itemsInPage)

        const participants = await participantsData.query
        res
        .status(200)
        .json({
            status:'success',
            results:participants.length,
            data:{
              participants
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err.message
        })
    }
    
};

exports.getYoungestParticipants = async (req,res)=>{
    req.query.age = {lte:20}
    try{
        const participantsData = new APIFeatures(Participant.find(), req.query)
        .filter()
        .limitFields()
        .paginate(itemsInPage)

        const participants = await participantsData.query
        res
        .status(200)
        .json({
            status:'success',
            results:participants.length,
            data:{
              participants
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err.message
        })
    }
    
};