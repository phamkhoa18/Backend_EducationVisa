const NewsController = require('../controllers/NewsController');
const router = require('express').Router();

// router (đường dẫn)
router.post('/addnew' , NewsController.Add_new);

router.get('/listnew' , NewsController.List_new);

router.post('/findnewcategory' , NewsController.Find_new_Category);

router.get('/findnewcategory/:_id' , NewsController.Find_new_Category_get);

router.get('/listnew/:slug' , NewsController.One_new);

router.post('/updatenew' , NewsController.Update_new);

router.post('/delnew' , NewsController.Del_new);

router.get('/outstanding' , NewsController.Outstanding);

router.get('/findnew/:slug' , NewsController.Find_new_slug);

router.post('/tim-kiem' , NewsController.Tim_kiem );

router.get('/soluongbaiviet' , NewsController.So_luong);

module.exports = router ;