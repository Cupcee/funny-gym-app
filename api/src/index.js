import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import routes from './routes/index.js'
import models from './models/index.js'

const app = express();

app.use(cors());

app.use((req, res, next) => {
    req.context = {
        models
    };
    next();
});

app.use('/users', routes.users);
app.use('/gymsets', routes.gymsets);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});