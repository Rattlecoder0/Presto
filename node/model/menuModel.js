var mongoose = require('mongoose')

var menuModel = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    foodname:String,
    fooddetails:String,
    s1:Number,
    s2:Number,
    s3:Number,
    s4:Number,
    foodimg:String,
    type:String
})

module.exports = mongoose.model('menus',menuModel)