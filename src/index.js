const express = require('express')
require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')

const userrouter = require('./router/user')
const taskrouter = require('./router/task')

const app = express()
const port = process.env.PORT || 3000

//middleware
// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.status(400).send('get is disabled')
//     }else{
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     if(req){
//         res.status(500).send('nist')
//     }
// })


const multer = require('multer')
const upload = multer({
    dest: 'images'
})

app.post('/upload', upload.single('upload'), (req,res)=>{
    res.send()
})


app.use(express.json())
app.use(userrouter)
app.use(taskrouter)


app.listen(port,()=>{
    console.log(`server is up ${port}`)
})











