const ContactsController = require('../controllers/ContactsController');
const router = require('express').Router();


// router (đường dẫn)
router.post('/sendcontact' ,ContactsController.Send_contact);

router.get('/listcontact' , ContactsController.List_contact);

router.get('/delcontact/:id' ,ContactsController.Del_contact );

router.post('/handleupdate' , ContactsController.Handle_Update);

router.get('/soluongcanxuly' , ContactsController.Xuly_contact);


module.exports = router ;