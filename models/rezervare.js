const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Rezervare = sequelize.define('Rezervare', {
    id_rezervare: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    masina_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    data: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
});

module.exports = Rezervare;
