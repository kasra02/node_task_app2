// CRUD
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURLL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURLL,{useNewUrlParser:true}, (err,client)=>{

    if(err){
        return console.log('unable to connect to database')
    }

    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name:'kasra',
    //     age:23
    // },(err, result)=>{
    //     if(err){
    //         return console.log('unable to insert')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name:'are',
    //         age:29
    //     },
    //     {
    //         name:'tara',
    //         age:42
    //     }
    // ],(err,result)=>{
    //    if(err){
    //        return console.log('unablle to insert')
    //    }
    //    console.log(result.ops)
    // })
    db.collection('tasks').insertMany([
        {
            task:"code until death",
            complete:false
        },
        {
            task:"drink until death",
            complete:false
        },
        {
            task:"be rich like musk till death",
            complete:true
        }
    ],(err, result)=>{
        if(err){
            return console.log('unablle to insert')
        }
        console.log(result.ops)
    })



})
