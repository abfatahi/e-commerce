const User = require("../core/database/models/user")

exports.userById = (req,res, next, id) => {
    User.findById(id).exec((err,user)=>{
        if(err || !user){
            res.status(400).json({
                error:"User Not Found"
            })
        }
        req.profile = user;
        next()
    })
}