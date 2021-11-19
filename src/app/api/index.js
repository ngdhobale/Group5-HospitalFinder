var express = require('express')
var router = express.Router();
var Post = require('../models/hospital');
const mongoose = require('mongoose');

router.get('/getAllHospital', async function (req, res) {
    const posts = await Post.find({});
    console.log(posts);
    res.json(posts);
});
router.get('/getCity', async function (req, res) {
    const posts = await Post.distinct("city");
    console.log(posts);
    res.json(posts);
});
router.post('/addHospital',async function(req,res){
    var postData = {
        "name":req.body.name,
        "speciality":req.body.speciality,
        "address":req.body.address,
        "city":req.body.city,
        "doctor":req.body.doctor,
        "image":req.body.image,
        "email":req.body.email,
        "username":req.body.username,
        "password":req.body.password
    }
    const post = new Post(postData);
    try{
       await post.save();
       res.send(post)
    }catch(e){
        console.log(e.message);
        res.status(500).send("Error"+e.name+'at add hospital');
    }
});
router.post('/viewHospital',async function(req,res){
    const posts = await Post.findById(mongoose.Types.ObjectId(req.body.id).toString()).exec();
    console.log(posts);
    res.json(posts);
});
router.post('/login',async function(req,res){
  const post = await Post.find({'email':req.body.email,'password':req.body.password});
  if(post.length>0){
    res.send({'msg':"user found",'status':true,'data':post[0]});
  }else{
    res.send({'msg':"user not found",'status':false,'data':''})
  }  
});

router.post('/update',async function(req,res){
    const filter = { _id: req.body.id };
    var postData = {
        "name":req.body.name,
        "speciality":req.body.speciality,
        "address":req.body.address,
        "city":req.body.city,
        "doctor":req.body.doctor,
        "image":req.body.image,
        "email":req.body.email,
        "username":req.body.username,
        "password":req.body.password
    }
    
    try{
       const posts = await Post.findOneAndUpdate(filter,postData);
       res.send(posts)
    }catch(e){
        console.log(e.message);
        res.status(500).send("Error"+e.name+'at add hospital');
    }
});

module.exports = router;