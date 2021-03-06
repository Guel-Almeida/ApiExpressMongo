const express = require("express");

const User = require("../models/users")

const router = express.Router();

router.post("/register", async (req,res)=>{
   
    try {
        const user = await User.create(req.body);
        return res.send(user);
    } catch (error) {
        return res.status(400).send({error:"falha no registro"});
    }
})

module.exports = app => app.use('auth', router);
