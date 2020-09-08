import express from 'express' 
const router = express.Router();

import { getTodos, updateTodos, createTodo, deleteTodo } from '../controllers/todo.controller';

router.get('/Todos', getTodos);
router.post('/Todos', createTodo);
router.put('/Todos', updateTodos);
router.delete('/Todos', deleteTodo);

export { router };