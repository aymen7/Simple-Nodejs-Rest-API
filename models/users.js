// required mongoose
const mongoose = require('mongoose');
// required validator
const validator = require('validator');
// create a schema instance
const Schema = mongoose.Schema
// create a userSchema
const userSchema = new Schema({
    'name': String,
    'username': String,
    'email': {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value)=>{
            return validator.isEmail(value);
        }
        
    },
    'password': String,
});

module.exports = mongoose.model('user',userSchema,'users');  // mongoose.model(name,schema,collection name in the db)
