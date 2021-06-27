const { error } = require('console');
const express = require('express')

const router = express.Router()

const User = require('../models/user');

router.get('/', async (req, res) => {
    res.render('index');
});

router.post('/submit', async (req, res) => {
    const user = new User(req.body);
    try{
        await user.save();
        res.render('thank');
    }
    catch(err){
        console.log(err)
        res.status(500).json('Server Error')
    }
});


module.exports = router