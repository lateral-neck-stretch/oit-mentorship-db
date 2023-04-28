const Sequelize = require('sequelize');
const db = require('../db');
module.exports = db.define(
  'mentees',
  {
    // TO-DO: add ID
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // TO-DO: store as JSON array
    pronouns: {
      type: Sequelize.JSONB,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    phoneNum: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // TO-DO change data type to DATEONLY
    dateOfBirth: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // TO-DO: store as JSON array
    gendersAndSexualities: {
      type: Sequelize.JSONB,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // TO-DO: JSON column with list of all options
    raceEthnicity: {
      type: Sequelize.JSONB,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // cohort: {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    //   validate: {
    //     notEmpty: true,
    //   },
    // },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ['email'],
      },
    ],
  }
);
