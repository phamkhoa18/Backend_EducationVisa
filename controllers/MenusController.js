const mongoose = require('mongoose');
const Menus = require('../models/Menus');
const Util = require('../Utils');
const MenusController = {
    Add_menu : async (req,res) => {
        try {
            const menu = new Menus({
                title : req.body.title , 
                link : req.body.link || 'vn/' +  Util.slug(req.body.title),
                slug : Util.slug(req.body.title),
                category_id : req.body.category_id ,
                parent_id : req.body.parent_id
            })
            const menusave = await menu.save();
            res.status(200).json(menusave);
        } catch (error) {
            res.status(404).json({message : error});
        }
    },
    List_menu : async (req,res) => {
        try {
            const menu = await Menus.find().sort('posision');
            res.status(200).json(menu);
        } catch (error) {
            res.status(404).json({message : error});
        }
    },
    getParent_Children_Menu :  async(req,res) =>  {
        const getMenu = await Menus.find({ parent_id: null }).lean();
        async function getChildren(menu) {
          const children = await Menus.find({ parent_id: menu._id }).lean();
          if (children.length > 0) {
            menu.children = children;
            for (let i = 0; i < children.length; i++) {
              await getChildren(children[i]);
            }
          }
        }
      
        for (let i = 0; i < getMenu.length; i++) {
          await getChildren(getMenu[i]);
        }
      
        res.json(getMenu);
      },
      Edit_menu : async(req,res) => {
        const menudatabase = await Menus.findByIdAndUpdate(req.body._id , {
                title : req.body.title , 
                link : req.body.link || 'vn/' +  Util.slug(req.body.title),
                slug : Util.slug(req.body.title),
                category_id : req.body.category_id ,
                parent_id : req.body.parent_id 
        })
        if(!menudatabase) {
            res.status(404).json({message : "Sai id rồi"});
        }else{
            res.status(200).json(menudatabase);
        }
    }, 
    Del_menu : async(req,res) => {
        const del = await Menus.deleteOne({_id : req.params.id});
        if (del.deletedCount === 1) {
            res.status(200).json({message : 'Successfully deleted one document.'});
        } else {
            res.status(404).json({message : 'No documents matched the query. Deleted 0 documents.'});
        }
    },

    Find_menu : async(req,res) => {
        try {
            const find = await Menus.findOne({slug : req.params.slug}).populate('category_id');
            if(find) {
                res.status(200).json(find);
            } 
            if(!find) {
                res.json({});
            }
        } catch (error) {
            res.status(404).json(error);
        }
    }
}
module.exports = MenusController ;