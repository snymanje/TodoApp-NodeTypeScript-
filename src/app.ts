import express from 'express';
import { router } from './routes/todo.router';

import cors from 'cors';
import bodyparser from 'body-parser';

import { requestLogger } from './middleware/request.logger';
import './startup/db';

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.use(requestLogger);

app.use('/', router);

export { app };
