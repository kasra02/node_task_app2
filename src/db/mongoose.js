const mongoosse = require('mongoose')
const connectionURLL = process.env.MONGODB_URL
mongoosse.connect(connectionURLL, {useNewUrlParser: true, useCreateIndex: true,useFindAndModify:false})






// const me = new User({
//     name: 'kasra',
//     email: 'kassra@gmail.com',
//     password: 'kasra2kasrra'
// })
//
// me.save().then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

// const Task = mongoosse.model('Tasks',{
//     task: {
//         type:String,
//         required:true,
//         trim:true
//     },
//     complete: {
//         type:Boolean,
//         default:false
//     }
// })
//
// const task1 = new Task({
//     task:'fucking start',
//     complete:false,
//
// })
//
// task1.save().then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })
