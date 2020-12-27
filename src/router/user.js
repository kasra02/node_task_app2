const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')

// sign up
router.post('/users',async (req,res)=> {
    const {body}=req
    const new_user = new User(body)

    try{
        await new_user.save()
        const token = await new_user.generateAuthToken()
        res.status(201).send({new_user, token})
    }catch (e){
        res.status(400).send(e)
    }

})

// log In
router.post('/users/login',async (req,res)=>{
    try {
        const user = await User.findByCredential(req.body.email,req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token,status:'login is okay'})
    }catch (e) {
        res.status(400).send(e)
    }
})

// profile
router.get('/users/me', auth, async(req,res)=>{
   res.send(req.user)
})

// //retrieve
// router.get('/users/:id', async (req,res)=>{
//     const {id} = req.params
//
//     try {
//         const resdata = await User.findById(id)
//         if(!resdata){
//             return  res.status(404).send(e)
//         }
//         res.status(200).send(resdata)
//     }catch (e){
//         res.status(400).send({e})
//     }
//
// })

// upddate
router.patch('/users/me', auth, async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowUpdates = ['name','email','password','age']
    const isValidOperation = updates.every(update=> allowUpdates.includes(update) )
    if(!isValidOperation){
        return res.status(400).send({error:'error'})
    }

    try{
        // const update_user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})

        updates.forEach(update=>req.user[update]=req.body[update])
        await req.user.save()
        console.log(req.user)
        res.status(200).send(req.user)
    }catch (e){
        res.status(400).send(e)
    }
})

// delete
router.delete('/users/me', auth, async (req,res)=>{
    try{
        // const user = await User.findByIdAndDelete(req.user._id)
        // if(!user){
        //     return res.status(404).send({err:'no user'})
        // }
        await req.user.remove()
        res.status(200).send({removeUser:req.user})
    }catch (e) {
        res.status(403).send(e)
    }
})

//logout
router.post('/users/logout',auth, async (req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter(token=>{
            return token.token !== req.token
        })
        await req.user.save()
        res.send('logout')
    }catch (e) {
        console.log(e)
    res.status(500).send(e)
    }
})

//logout all
router.post('/users/logoutall',auth,async (req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.status(500).send('logout of all')
    }catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
