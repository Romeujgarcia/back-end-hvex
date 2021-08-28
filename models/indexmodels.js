const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');


const  employeeSchema = new Schema({
    name: {
        type: String,
        require:true,
    },
    name_de_usuario: {
        type: String,
        unique:true,
        required:true,
        lowercase:true,
    },
    senha: {
        type: String,
        required:true,
        select:true,
    },
    createdAt:{
        type: Date,
        default:Date.now,

    },
});

const Employee = mongoose.model('noderest', employeeSchema);
module.exports = Employee;