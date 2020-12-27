// CRUD
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const {MongoClient, ObjectID} = require('mongodb')


const connectionURLL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURLL,{useNewUrlParser:true}, (err,client)=>{

    if(err){
        return console.log('unable to connect to database')
    }
    const db = client.db(databaseName)



























    // db.collection('users').insertOne({
    //     name:'ahamgh',
    //     age:26
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
    // db.collection('tasks').insertMany([
    //     {
    //         task:"code until death",
    //         complete:false
    //     },
    //     {
    //         task:"drink until death",
    //         complete:false
    //     },
    //     {
    //         task:"be rich like musk till death",
    //         complete:true
    //     }
    // ],(err, result)=>{
    //     if(err){
    //         return console.log('unablle to insert')
    //     }
    //     console.log(result.ops)
    // })0

    // db.collection('users').findOne({_id:ObjectID('5fe6571a53b92d22f4795396')},(err, user)=>{
    //     if(err){
    //         return console.log('unable to fetch')
    //     }
    //     if(user===null){
    //         return console.log('there is not user with the')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({age:27}).toArray((error,users)=>{
    //     console.log(users)
    // })
    //
    // db.collection('users').find({age:23}).count((error,count)=>{
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({_id:ObjectID("5fe653d95a5ed57474fd0cc1")},(err,result)=>{
    //     if(err){
    //         return console.log('unable to fetch the data')
    //     }else if(result===null){
    //         return console.log('unable to find anything special')
    //     }else{
    //         console.log(result)
    //     }
    // })

    // db.collection('tasks').find({complete:false}).count(((error, documents) => {
    //     console.log(documents)
    // }))

    // db.collection('users').updateOne({_id:new ObjectID('5fe62fef072fcf1d50627ecc')},{
    //     $inc:{age:1}
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').updateMany(({_id:new ObjectID('5fe6571a53b92d22f4795396')}, {_id:new ObjectID('5fe651f203ec343e84ae360a')}),
    //     {$inc:{age:1}}
    //     ).then((res)=>{
    //         console.log(res)
    //     }).catch((err)=>{
    //         console.log(err)
    // })

    // db.collection('tasks').updateMany({complete:false},{$set:{complete:true}}).then((res)=>{
    //     console.log(res.modifiedCount)
    // }).catch((err)=>{
    //     console.log(err)
    // })

    // db.collection('users').deleteMany({
    //     age:27
    // }).then((result)=>{
    //     console.log(result.deletedCount)
    // }).catch((err)=>{
    //     console.log(err)
    // })
    //
    // db.collection('tasks').deleteOne({_id:new ObjectID('5fe653d95a5ed57474fd0cc0')}).then((resultl)=>{console.log(resultl.deletedCount)}).catch((err)=>console.log(err))

})
