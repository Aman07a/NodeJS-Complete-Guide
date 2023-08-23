import express = require('express');
import bodyParser = require('body-parser');

import todosROuter from './routes/todos';

const app = express();

app.use(bodyParser.json());

app.use(todosROuter);

app.listen(3000);
