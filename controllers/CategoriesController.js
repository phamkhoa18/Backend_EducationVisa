const mongoose = require('mongoose');
const Categories = require('../models/Categories');
const Util = require('../Utils');
const CategoriesController = {

    Add_category : async (req,res) => {
      try {
          const category = new Categories({
              title : req.body.title , 
              link : Util.slug(req.body.title) ,
              parent_id : req.body.parent_id ,
              background : req.body.background 
          })
          const categorysave = await category.save()
          res.status(200).json(categorysave);
      } catch (error) {
          res.status(404).json({message : error});
      }
    },
    getCategories :  async(req,res) =>  {
        const categories = await Categories.find({ parent_id: null }).lean();
        async function getChildren(category) {
          const children = await Categories.find({ parent_id: category._id }).lean();
          if (children.length > 0) {
            category.children = children;
            for (let i = 0; i < children.length; i++) {
              await getChildren(children[i]);
            }
          }
        }
      
        for (let i = 0; i < categories.length; i++) {
          await getChildren(categories[i]);
        }
      
        res.json(categories);
      },

      List_category : async (req,res) => {
        try {
            const category = await Categories.find();
            res.status(200).json(category);
        } catch (error) {
            res.status(404).json({message : error});
        }
    },

    editCategory : async(req,res) => {
      const categorydatabase = await Categories.findByIdAndUpdate(req.body._id , {
          title : req.body.title ,
          parent_id : req.body.parent_id ,
          background : req.body.background
      })
      if(!categorydatabase) {
          res.status(404).json({message : "Sai id rồi"});
      }else{
          res.status(200).json(categorydatabase);
      }
  },

  delCategory : async(req,res) => {
      const del = await Categories.deleteOne({_id : req.body._id});
      if (del.deletedCount === 1) {
          res.status(200).json({message : 'Successfully deleted one document.'});
        } else {
          res.status(404).json({message : 'No documents matched the query. Deleted 0 documents.'});
        }
  }
}

module.exports = CategoriesController ;