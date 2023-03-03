
//it is use for connect to databash
const dotenv = require('dotenv').config()
const mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/user_system').then(()=>{
            console.log("databash is connected")});
const app = require('express')();
const Route = require('../routes/userRoute');
app.use('/',Route);
const adminRoute = require('../routes/adminRoute');
app.use('/admin',adminRoute);




//it is use for server running...
app.listen(process.env.PORT,()=>{
    console.log('ready to listen');
})
