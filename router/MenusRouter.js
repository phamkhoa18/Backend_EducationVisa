const MenusController = require('../controllers/MenusController');
const router = require('express').Router();


// router (đường dẫn)

// THÊM 
router.post('/addmenu' , MenusController.Add_menu);

// LIST MENU
router.get('/listmenu' , MenusController.List_menu);

// GET PARENT & CHILDREN MENU 
router.get('/getMenu' , MenusController.getParent_Children_Menu);

// EDIT MENU 
router.post('/editmenu' , MenusController.Edit_menu);

// DEL MENU 
router.get('/delmenu/:id' , MenusController.Del_menu);

// FIND MENU 
router.get('/findmenu/:slug' ,MenusController.Find_menu );


module.exports = router ;