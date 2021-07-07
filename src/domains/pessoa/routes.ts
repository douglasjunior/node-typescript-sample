import * as express from 'express';

import controller from './controller';

const pessoaRouter = express.Router();

pessoaRouter.get('/:idPessoa', controller.find);

export default pessoaRouter;
