import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  description: string;
}

const TodoSchema: Schema = new Schema({
  description: { type: String, required: true }
});

// Export the model and return your ITodo interface
export default mongoose.model<ITodo>('Todo', TodoSchema);
