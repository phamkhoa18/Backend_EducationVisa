const BackgroundsController = require('../controllers/BackgroundsController');
const router = require('express').Router();


// router (đường dẫn)
router.post('/upload' , BackgroundsController.Upload);


module.exports = router ;