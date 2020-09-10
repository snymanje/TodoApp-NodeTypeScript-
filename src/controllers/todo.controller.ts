import { Request, Response } from 'express';

import ITodo from '../models/todo';
import { ITodoDto } from '../interfaces/todo';

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const results = await ITodo.findById(req.params.id);
    if (!results) {
      res.status(400).json({
        status: 'sucess',
        message: `Item with id ${req.body.id} not found`
      });
    }

    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};

const getAllTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const results = await ITodo.find({});
    if (!results) {
      res.status(400).json({
        status: 'sucess',
        message: 'No items not found'
      });
    }
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};

const createTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const reqData: ITodoDto = req.body;
    const item = await ITodo.create({ description: reqData.description });
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
    const reqData: ITodoDto = req.body;
    const todo = await ITodo.findById(req.params.id);
    if (!todo) {
      res.status(400).json({
        status: 'failed',
        message: 'This todo item could not be found.'
      });
    } else {
      todo.description = reqData.description;
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
    await ITodo.findByIdAndDelete(req.params.id);

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

export { getTodos, createTodo, updateTodos, deleteTodo, getAllTodos };
