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
    db.collection('users').insertOne({
        name:'kasra',
        age:23
    })
})
