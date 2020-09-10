import express from 'express';
import { router } from './routes/todo.router';

import cors from 'cors';
import bodyparser from 'body-parser';
import path from 'path';

import { requestLogger } from './middleware/request.logger';
import './startup/db';

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.use(requestLogger);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/docs.html'));
});

app.use('/', router);

export { app };
