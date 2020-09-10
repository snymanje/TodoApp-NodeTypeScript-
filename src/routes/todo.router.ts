import express from 'express';
const router = express.Router();

import { getTodos, updateTodos, createTodo, deleteTodo, getAllTodos } from '../controllers/todo.controller';

router.get('/:id', getTodos);
router.get('/', getAllTodos);
router.post('/', createTodo);
router.put('/:id', updateTodos);
router.delete('/:id', deleteTodo);

export { router };
