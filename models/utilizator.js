const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Utilizatori = sequelize.define('Utilizatori', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nume: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    prenume: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },
    parola: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    telefon: {
        type: DataTypes.STRING(15)
    },
    adresa: {
        type: DataTypes.TEXT
    },
    rol: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

module.exports = Utilizatori;
