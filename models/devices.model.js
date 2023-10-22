// const {DataTypes} = require('sequelize')
module.exports =(sequelize, DataTypes) => {
    const devices = sequelize.define('devices', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        sensor_specification: {
            type: DataTypes.STRING
        },
        gps_location_latitude: {
          type: DataTypes.DECIMAL(10, 8), 
        },
        gps_location_longitude: {
          type: DataTypes.DECIMAL(11, 8), 
        },
        device_notification: {
          type: DataTypes.BOOLEAN,
          defaultValue: true, 
        },
})
return devices

}