import mongoose from "mongoose";

// create a scheme
// create a model based on that

const toDoSchema = new mongoose.Schema({
    title: {
        type:String, 
        required:true, 
    },
    content: {
        type:String,
        required:true, 
    },
}, {timestamps:true});

const ToDo = mongoose.model('ToDo', toDoSchema)

export default ToDo