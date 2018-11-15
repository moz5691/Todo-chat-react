const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: { type: String, required: true },
  done: { type: Boolean, required: true },
  key: { type: String, required: true }
});

mongoose.model('todos', TodoSchema, 'todos');
