const mongoosse = require('mongoose')
const validator = require('validator')
const connectionURLL = 'mongodb://127.0.0.1:27017/task-manager-api'
mongoosse.connect(connectionURLL, {useNewUrlParser: true, useCreateIndex: true})

const User = mongoosse.model('User', {
        name: {
            type: String,
            required: true,
            trim:true
        },
        email: {
            type: String,
            required: true,
            trim:true,
            lowercase:true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('email iss invalid')
                }
            }
        },
        age: {
            type: Number,
            default:0,
            validate(value) {
                if (value < 0) {
                    throw new Error('age must be number')
                }
            }
        },
        password:{
            type:String,
            required:true,
            trim:true,
            minLength:6,
            validate(value){
                if(value.toLowerCase().includes('password')){
                    throw new Error('password cannot contain password')
                }
            }
        }
    }
)

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

const Task = mongoosse.model('Tasks',{
    task: {
        type:String,
        required:true,
        trim:true
    },
    complete: {
        type:Boolean,
        default:false
    }
})

const task1 = new Task({
    task:'fucking start',
    complete:false,

})

task1.save().then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})
