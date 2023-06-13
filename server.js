const express = require('express');
const app = express() ;
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const MenusRouter = require('./router/MenusRouter');
const CategoriesRouter = require('./router/CategoriesRouter');
const ContactsRouter = require('./router/ContactsRouter');
const NewsRouter = require('./router/NewsRouter');
const UsersRouter = require('./router/UsersRouter');
const SlidersRouter = require('./router/SlidersRouter');
const BackgroundsRouter = require('./router/BackgroundsRouter');
const PORT = 3000 || process.env.PORT ;
// use
app.use(cors());
app.use(fileUpload())
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));
app.use(bodyParser.json());
app.use(morgan('common'));

// connect mongodb 
mongoose.connect('mongodb://localhost:27017/EDUCATIONVISA', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Kết nối MongoDB thành công'))
  .catch(err => console.error('Lỗi kết nối MongoDB: ', err));



// use router
app.use('/' ,MenusRouter );
app.use('/' , CategoriesRouter);
app.use('/' , ContactsRouter);
app.use('/' , NewsRouter);
app.use('/' , UsersRouter);
app.use('/' , SlidersRouter);
app.use('/' , BackgroundsRouter);

app.listen(PORT , () => {
    console.log('Server run: ' + PORT );
})