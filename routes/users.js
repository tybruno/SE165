const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');


const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//register link
router.post('/register', function(req, res, next) {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })

    User.addUser(newUser, (err,user) =>{
      if(err){
        res.jsaon({success:false, msg:'Failed to reqister user'});

      }else{
        res.jason({success: true, msg: 'User registered'});
      }


    });

});

router.post('/authenticate', function(req, res, next) {
    res.send('Authenticate');
});

router.get('/profile', function(req, res, next) {
    res.send('profile');
});

router.get('/validate', function(req, res, next) {
    res.send('validate');
});

module.exports = router;
