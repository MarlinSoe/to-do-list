import express from 'express';
import { createToDo, deleteToDo, getAllToDo, updateToDo, getToDoByID } from '../controller/toDoControllers.js';

const router = express.Router();

router.get('/', getAllToDo);
router.get('/:id', getToDoByID);
router.post('/', createToDo);
router.put('/:id', updateToDo);
router.delete('/:id', deleteToDo);

export default router;

