const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    title       : {type : String , required : true} ,
    description : {type : String} ,
    link : {type : String } , 
    url : {type : String } 
})


const Backgrounds = mongoose.model('Backgrounds' , newSchema);
module.exports = Backgrounds ;
