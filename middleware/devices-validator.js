
const { body } = require('express-validator');

const { userModel } = require('../models')
// Mengimport model 'devices' dari modul Sequelize

const devicesValidator = [
  body("name")
    .notEmpty().withMessage("name wajib diisi")
    .custom(async (value) => {
      // Menggunakan async/await untuk melakukan pencarian dalam database
      const existingDevice = await userModel.findOne({ where: { name: value } });

      if (existingDevice) {
        throw new Error("Nama sudah terdaftar");
      }

      return true;
    }),
];

module.exports = devicesValidator;
