var express = require("express")
const mongoose = require('mongoose');
var menuRout = express.Router();
var menuRout1 = express.Router();

var menuModel = require('../model/menuModel')

menuRout.get("/getmenudata", (req,res) => {
    menuModel.find().then((mdata)=>{
        console.log(mdata)
        console.log('user data list')
        res.send(mdata)
    }).catch((err)=>{
        console.log(err)
    })
})

menuRout.post("/addmenudata", (req,res) => {
    console.log('Hii')
    res.send('new user data added')
})

menuRout.put("/upmenu", (req,res) => {
    console.log('Hii')
    res.send('user data updated')
})
menuRout.delete("/deletemenu", (req,res) => {
    console.log('Hii')
    res.send('user data deleted')
})





module.exports = menuRout

// var menu = require('./model/menuModel')
