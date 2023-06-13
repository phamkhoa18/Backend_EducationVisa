const CategoriesController = require('../controllers/CategoriesController');
const router = require('express').Router();


// router (đường dẫn)
router.post('/addcategory' , CategoriesController.Add_category);

router.get('/getCategories' , CategoriesController.getCategories);

router.get('/listcategory' , CategoriesController.List_category);

// edit 
router.post('/edit_category' , CategoriesController.editCategory);

// del
router.post('/del_category' , CategoriesController.delCategory);
module.exports = router ;