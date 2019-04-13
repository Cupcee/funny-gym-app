import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import routes from './routes/index.js'
import models from './models/index.js'

const app = express();

app.use((req, res, next) => {
    req.context = {
      models,
      authUser: models.users[3],
    };
    next();
  });

app.use('/users', routes.users);

app.use(cors());

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});