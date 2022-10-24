var express = require("express")

var router = express.Router();

router.get("/getdata", (req,res) => {
    console.log('Hii Friends')
    res.send('user data list')
})
router.post("/adddata", (req,res) => {
    console.log('Hii Friends')
    res.send('new user data added')
})
router.put("/update", (req,res) => {
    console.log('Hii Friends')
    res.send('user data updated')
})
router.delete("/delete", (req,res) => {
    console.log('Hii Friends')
    res.send('user data deleted')
})


module.exports = router;


