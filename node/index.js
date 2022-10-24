var express = require("express")

const cors = require('cors');
var app = express();
app.use(cors());


var bodyparser = require('body-parser')
var jsonparser = bodyparser.json()


app.get("/", (req,res) => {
    console.log('Hii Friends')
    res.send('Welcome to World')
})

// ------mongodb atlas connection 
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ubaid:ubaidmongo@cluster0.tydgi75.mongodb.net/Registered?retryWrites=true&w=majority", {
    useNewUrlParser:true, useUnifiedTopology:true,
}).then(()=>{console.log('Mongodb Atlas connection establish')
}).catch((err)=>{
    console.log(err)
})

var userModel = require('./model/model')

// mongodb read data
app.get('/getData',(req,res)=>{
    userModel.find().then((mdata)=>{
        console.log(mdata)
        res.send(mdata)
    }).catch((err)=>{
        console.log(err)
    })
})


//Add Data
app.post('/addData',jsonparser,(req,res)=>{
    const userdata = new userModel({
        _id: new mongoose.Types.ObjectId,
        firstname: req.body.firstname,
    lastname: req.body.lastname,
    mobile: req.body.mobile,
    email: req.body.email,
    password: req.body.password,
    })
    userdata.save().then((mdata)=>{
        console.log(mdata)
        res.send(mdata)
    }).catch((err)=>{
        console.log(err)
    })
})



// Update / Put Data

app.put('/updateData/:id',jsonparser,(req,res)=>{
    userModel.updateOne({_id: req.params.id},
        {
            $set:{
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                mobile : req.body.mobile,
                email : req.body.email,
                password : req.body.password
            }
        }).then((mdata) =>{
            console.log(mdata)
        }).catch((err)=>{
            console.log(err)
        })
    
})


// Delete api

app.delete('/deleteData/:id',(req,res)=>{
userModel.deleteOne({_id: req.params.id}).then((mdata)=>{
    console.log(mdata)
    res.send(mdata)
}).catch((err)=>{
    console.log(err)
})
})





// menu model 
var menumo = require('./routes/routeMenu')

var menuModel = require('./model/menuModel')

app.use('/menu',menumo)


//category wise data api
app.get('/menuRout/:id', jsonparser, (req,res) => {
    menuModel.find({_id: req.params.id}).then((mdata) => {
        console.log(mdata)
        res.send(mdata)
    }).catch((err)=>{
        console.log(err)
    })
})




app.listen(3000, ()=>{
    console.log("server is running")
});