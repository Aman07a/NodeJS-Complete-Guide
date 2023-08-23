import express = require('express');
import bodyParser = require('body-parser');

import todosRouter from './routes/todos';

const app = express();

app.use(bodyParser.json());

app.use(todosRouter);

app.listen(3000);
