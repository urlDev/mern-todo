const express = require('express');
require('./db/mongoose');
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
