const mongoose = require('mongoose');

const contactmessageSchema = new mongoose.Schema({
    username      : {type : String } ,
    email         : {type : String } ,
    phone         : {type : Number} ,
    select : {type : String} ,
    date   : {type : String} ,
    active        : {type : Boolean , default : false} 
})

const Contactmessages = mongoose.model('Contactmessages' , contactmessageSchema);
module.exports = Contactmessages ;
