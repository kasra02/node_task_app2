const mongoosse = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoosse.Schema({
    title: {
        type: String,
        required: true,
        trim:true
    },
    complete:{
        type:Boolean,
        trim:true,
        require:true,
        default:true
    },
    owner:{
        type:mongoosse.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{
    timestamps:true
})

const Task = mongoosse.model('Task',taskSchema)

taskSchema.pre('save',async function (next){
    next()
})

module.exports = Task