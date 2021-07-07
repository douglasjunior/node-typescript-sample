import { Response, Request, NextFunction } from 'express';

import { testeHelper } from '~/helpers/teste-helper';

const find = (request: Request, response: Response, next: NextFunction) => {
    const { params } = request;

    const message = testeHelper(Number(params.idPessoa));

    response
        .status(200)
        .json({
            message,
        });
};

export default {
    find,
};
