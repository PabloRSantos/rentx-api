import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.post('/', (request, response) => {
  const { cpf, name } = request.body;
  const id = uuidv4();
});

app.listen(3333);
