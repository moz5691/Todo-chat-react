const express = require('express');
const app = express();
const keys = require('./config/keys');
const mongoose = require('mongoose');
require('./models/Todo');

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(
    keys.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('mongodb connected:todoTwo'))
  .catch(err => console.log(err));

require('./routes/api')(app);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
