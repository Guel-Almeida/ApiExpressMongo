const mongoose = require("../database")

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type:String,
        require: true,
        unique: true,
        lowercase:true
    },
    password:{
        type: String,
        require: true,
        select: false
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    
});

const User = mongoose.model("users", UserSchema);

module.exports = User;