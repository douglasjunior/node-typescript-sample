import cors from 'cors';
import express from 'express';

import pessoaRouter from './domains/pessoa/routes';

const app = express();

app.use(cors());

app.use('/pessoas', pessoaRouter);

app.listen(3001, () => {
    // eslint-disable-next-line no-console
    console.log('listening...');
});
