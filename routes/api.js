const mongoose = require('mongoose');
const Todo = mongoose.model('todos');
const _ = require('lodash');

module.exports = function(app) {
  app.get('/api', (req, res) => {
    console.log('GET');
    Todo.find({}).then(todo => res.send(todo));
  });

  app.post('/api', async (req, res) => {
    const newTodo = {
      text: req.body.text,
      done: req.body.done,
      key: req.body.key
    };
    const todo = new Todo(newTodo);
    /* find if todo already exists here*/
    const response = await Todo.find({ key: todo.key });
    if (response.length === 0) {
      try {
        await todo.save();
        res.sendStatus(200);
      } catch (err) {
        res.sendStatus(500);
        console.log(err);
      }
    }
  });

  app.delete('/api/:id', (req, res) => {
    Todo.findOneAndRemove({ key: req.params.id }).then(err => console.log(err));
  });
};
