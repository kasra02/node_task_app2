const express = require('express')
const router = new express.Router()
const Task = require('../models/task')
const auth = require('../middleware/auth')

router.post('/tasks', auth, async (req,res)=> {
    const {body}=req

    const task = new Task({
        ...body,
        owner:req.user._id
    })
    try {
        await task.save()
        res.status(200).send(task)
    }catch (e) {
        res.status(400).send(e)
    }

})

//get /task/


router.get('/tasks', auth, async (req,res)=>{
    const match = {}
    const sort = {}

    if(req.query.complete){
        match.complete = req.query.complete === 'true'
    }

    if(req.query.sortBy){
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    try{
        await req.user.populate({
            path:'tasks',
            match,
            options:{
                limit:parseInt(req.query.limit),
                skip:parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        res.status(200).send(req.user.tasks)
    }catch (e) {
        res.status(400).send(e)
    }

})

router.get('/tasks/:id', auth, async (req,res)=>{
    const {body} = req
    const {id} = req.params

    try{
        // const task = await Task.findById(id)
        const task = await Task.findOne({_id:id,owner:req.user._id})
        res.status(200).send(task)
    }catch (e) {
        res.status(400).send(e)
    }
})

router.patch('/tasks/:id', auth,async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowUpdates = ['title','complete']
    const isValidOperation = updates.every(update=>allowUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error:'error'})
    }

    // const updatedTask = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})

    try{
        const updatedTask = await Task.findOne({_id:req.params.id,owner:req.user._id})
        if(!updatedTask){
            res.status(404).send({error:'no task with that id'})
        }
        updates.forEach(update=>updatedTask[update]=req.body[update])
        await updatedTask.save()
        res.status(200).send(updatedTask)
    }catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', auth, async (req,res)=>{
    try{
        const task = await Task.findOneAndDelete({_id:req.params.id,owner:req.user._id})
        if(!task){
            return res.status(404).send({err:'no user'})
        }
        res.status(200).send({removeTask:task})
    }catch (e) {
        res.status(403).send(e)
    }
})

module.exports = router
