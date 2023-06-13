const mongoose = require('mongoose');
const Backgrounds = require('../models/Backgrounds');
const multer  = require('multer') ;
const upload = multer({ dest: 'uploads/' })

const BackgroundsController = {

    Upload : async(req,res) => {
        const data = new Backgrounds({
            title : req.body.title ,
            description : req.body.description ,
            link : req.body.link 
        })
    }
}

module.exports = BackgroundsController ;