const SlidersController = require('../controllers/SlidersController');
const router = require('express').Router();


// router (đường dẫn)
router.post('/addslider' ,SlidersController.Add_slider);

router.get('/listslider' , SlidersController.List_slider);

router.get('/delslider/:id' , SlidersController.Del_slider);

router.get('/oneslider/:posision' , SlidersController.One_slider);

module.exports = router ;