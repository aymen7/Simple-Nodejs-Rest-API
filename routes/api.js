const express = require('express');
const router = express.Router();
// get the user model
const User = require('../models/users');
// getting mongoose and connect with the db at Mlab
const mongoose = require('mongoose');
const db = 'mongodb://dz-innov-fake-user:07dz-innov-fake-user@ds145474.mlab.com:45474/dz-innov-fake-db';
mongoose.connect(db,(err)=>{
    const msg = err? `failed to connect to db because of: ${err}`: `successfully connected to mongodb db`;
    console.log(msg);
});

router.post('/register',(req,res)=>{
    // get the userData sent from the client
    let userData = req.body;
    // initialize a user instance with this data
    let user = new User(userData);
    // save the user to tha database
    user.save((err,registeredUser)=>{
        if (err) console.log(`failed to register the user err: `);
        // if success send status 200 and the registeredUser data to the client
        res.status(200).send(registeredUser);
    });
});
// export the router so it can be used by other modules
module.exports = router;
