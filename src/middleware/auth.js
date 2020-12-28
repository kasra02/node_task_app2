const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req,res,next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decodeddd = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findOne({_id:decodeddd._id,'tokens.token':token})
        if(!user){
            throw new Error()
        }
        console.log(user)
        req.user = user
        req.token = token
        next()

    }catch (e) {
        res.status(401).send({error:'pleasee authenticate'})
    }
}

module.exports = auth