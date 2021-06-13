const express = require("express")
const User = require("./models/users")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
console.log("oi")
app.post("/auth/register", async (req,res)=>{
   
    try {
        const user = await User.create(req.body);
        return res.send(user);
    } catch (error) {
        return res.status(400).send({error:"falha no registro"});
    }
})
//require('./controllers/authController')(app)
app.listen(3000);