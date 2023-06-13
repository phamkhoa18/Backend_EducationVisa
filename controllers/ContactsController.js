const mongoose = require('mongoose');
const Contacts = require('../models/Contactmessages');

const ContactsController = {
// SEND CONTACT
Send_contact : async (req,res) => {
    try {
        const user = new Contacts({
            username : req.body.username , 
            email    : req.body.email ,
            select  : req.body.select ,
            phone    : req.body.phone , 
            date : req.body.date 
        })
        const usersave = await user.save() ;
        res.status(200).json({status : 200 , message : "Gửi thành công"});
    } catch (error) {
        res.status(404).json({status : 404 , message : "Không thành công"});
    }
},

// LIST CONTACT SENT
List_contact : async (req,res) => {
    try {
        const user = await Contacts.find() ;
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message : error});
    }
},

// ĐÃ XỬ LÝ KHÁCH HÀNG GỬI LÊN :
Handle_Update : async (req,res) => {
    try {
        const dataone = await Contacts.findByIdAndUpdate(req.body._id , {
            username : req.body.username , 
            email    : req.body.email ,
            select  : req.body.select ,
            phone    : req.body.phone , 
            date : req.body.date ,
            active : req.body.active 
        })
        
        if(dataone) {
            res.status(200).json({status : 200 , message : "update thành công"});
        }
        else {
            res.status(404).json({status : 404 , message : "không thành công"});
        }
    } catch (error) {
        res.status(404).json({message : error});
    }
},

Del_contact  : async(req,res) => {
    try {
        try {
            const del = await Contacts.deleteOne({_id : req.params.id});
        if (del.deletedCount === 1) {
            res.status(200).json({ status : 200 , message : 'Successfully deleted one document.'});
          } else {
            res.status(200).json({ status : 404 , message : 'No documents matched the query. Deleted 0 documents.'});
          }
        } catch (error) {
            res.status(404).json({ status : 404 , message : "lỗi "});
        }
    } catch (error) {
        
    }
},

Xuly_contact : async (req,res) => {
    try {
        const count = await Contacts.countDocuments({active : false});
        res.status(200).json(count);
    } catch (error) {
        res.status(404).json(error);
    }
}
}

module.exports = ContactsController ;