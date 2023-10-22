const express = require ("express")
const router = express.Router()

// const db = require("../models");
const { userModel } = require('../models')

// const userModel = db.User;

const { body, validationResult } = require("express-validator");
const erorHandlerMiddleware = require('../middleware/error-handling');


const devicesterValidator = require('../middleware/devices-validator');


router.get('/devices', async (req, res) => {
    const dataUser = await userModel.findAll()

    res.status(200).json(dataUser);
});

router.get('/devices/:userId', async (req, res) => {
    const id = req.params.userId

    const dataUser = await userModel.findOne({where: {id: id}})

    res.status(200).json(dataUser)
});


router.post('/devices', devicesterValidator, async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const saveDevice = await userModel.create({
        name: req.body.name,
        location: req.body.location,
        type: req.body.type,
        sensor_specification: req.body.sensor_specification,
        gps_location_latitude: req.body.gps_location_latitude,
        gps_location_longitude: req.body.gps_location_longitude,
        device_notification: req.body.device_notification
      });
      
    res.status(201).json(saveDevice)
});

router.put('/devices/:userId', async (req, res) => {
    
    const id = req.params.userId
    const {location,
        type,
        sensor_specification,
        gps_location_latitude,
        gps_location_longitude,
        device_notification,} = req.body

    const updateUser = await userModel.update({
        location,
        type,
        sensor_specification,
        gps_location_latitude,
        gps_location_longitude,
        device_notification,
    },{
        where: {
            id
        }
    }
    
    )

    res.status(201).json(updateUser)
});


router.delete('/devices/:userId', async (req, res) => {
    const id = req.params.userId

    const deleteUser = await userModel.destroy({
        where: {id: id}})

    res.status(200).json(deleteUser)
});

router.use(erorHandlerMiddleware);


module.exports = router