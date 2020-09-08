import { Request, Response } from 'express';

import ITodo from '../models/todo';

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const results = await ITodo.findById(req.body.id);
    if (results) res.status(200).json(results);

    res.status(400).json({
      status: 'sucess',
      message: `Item with id ${req.body.id} not found`
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};

const createTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const item = await ITodo.create({ description: req.body['description'] });
    await item.save();
    res.status(200).json({
      status: 'Success',
      message: 'Create successfully',
      data: item
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};

const updateTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo = await ITodo.findById(req.body.id);
    if (!todo) {
      res.status(400).json({
        status: 'failed',
        message: 'This todo item could not be found.'
      });
    } else {
      todo.description = req.body.description;
      await todo.save();
      res.status(200).json({
        status: 'sucess',
        message: 'Item updates sucessfully'
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    await ITodo.findByIdAndDelete(req.body.id);

    res.status(200).json({
      status: 'sucess',
      message: 'Item deleted sucessfully'
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};

export { getTodos, createTodo, updateTodos, deleteTodo };
