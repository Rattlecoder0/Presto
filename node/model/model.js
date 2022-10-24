var mongoose = require('mongoose')

var usermodel = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname:String,
    lastname:String,
    mobile:Number,
    email:String,
    password:String
})

module.exports = mongoose.model('signup_datas',usermodel)
