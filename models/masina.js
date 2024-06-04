const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Masina = sequelize.define('Masina', {
    id_masina: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    brand: {
        type: DataTypes.ENUM(
            'Undefined', 
            'Acura', 
            'Alfa Romeo', 
            'Aston Martin', 
            'Audi', 
            'Bentley', 
            'BMW', 
            'Bugatti', 
            'Buick', 
            'Cadillac', 
            'Chevrolet', 
            'Chrysler', 
            'Citroen', 
            'Dodge', 
            'Ferrari', 
            'Fiat', 
            'Ford', 
            'Honda', 
            'Hyundai', 
            'Infiniti', 
            'Jaguar', 
            'Jeep', 
            'Kia', 
            'Lamborghini', 
            'Land Rover', 
            'Lexus', 
            'Lincoln', 
            'Lotus', 
            'Maserati', 
            'Mazda', 
            'McLaren', 
            'Mercedes-Benz', 
            'Mini', 
            'Mitsubishi', 
            'Nissan', 
            'Pagani', 
            'Peugeot', 
            'Porsche', 
            'Ram', 
            'Renault', 
            'Rolls-Royce', 
            'Saab', 
            'Seat', 
            'Subaru', 
            'Suzuki', 
            'Tesla', 
            'Toyota', 
            'Volkswagen', 
            'Volvo'
        ),
        defaultValue: 'Undefined'
    },
    model: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    vin: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false
    },
    pret: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    an_fabricatie: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagine: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    accident: {
        type: DataTypes.STRING(5)
    },
    descriere: {
        type: DataTypes.STRING(1024),
        allowNull: false
    },
    km: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

module.exports = Masina;
