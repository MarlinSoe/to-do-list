import ToDo from "../models/ToDo.js";

export async function getAllToDo(req, res) {
    try { 
        const todos = await ToDo.find().sort({createdAt:-1}); // fetch the newest to do first 
        res.status(200).json(todos)

    } catch (error) {
        console.log('Error in getAllToDo controller', error)
        res.status(500).json({message:'Interal server error.'})
    }
};

export async function getToDoByID(req,res) {
    try {
        const todo = await ToDo.findById(req.params.id);
        if (!todo) return res.status(404).json({message:'To do not found!'});
        res.status(200).json(todo);

    } catch (error) {
        console.log('Error in getToDoByID controller', error)
        res.status(500).json({message:'Interal server error.'})
    }
}

export async function createToDo(req, res) {
    try {
        const {title,content} = req.body;
        const newToDo= new ToDo({title:title, content:content});

        const savedToDo = await newToDo.save();
        res.status(201).json(savedToDo);
    } catch (error) {
        console.log('Error in createToDo controller', error)
        res.status(500).json({message:'Interal server error.'})
    }
};

export async function updateToDo(req, res) {
    try {
        const {title, content} = req.body;
        const updatedToDo = await ToDo.findByIdAndUpdate(req.params.id, {title, content}, {new:true,});
        if (!updatedToDo) return res.status(404).json({message: "To Do not found"});
         
        res.status(200).json(updatedToDo);

    } catch (error) {
        console.log('Error in updateToDo controller', error)
        res.status(500).json({message:'Interal server error.'})
    }
};

export async function deleteToDo(req, res) {
    try {
        const deletedToDo = await ToDo.findByIdAndDelete(req.params.id);
        if (!deletedToDo) return res.status(404).json({message: 'To Do not found'});
         
        res.status(200).json({message:"To Do deleted."})
        
    } catch (error) {
        console.log('Error in deleteToDo controller', error)
        res.status(500).json({message:'Interal server error.'})
    }
}