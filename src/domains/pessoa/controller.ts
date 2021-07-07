import { Response, Request, NextFunction } from 'express';

import { testeHelper } from '~/helpers/teste-helper';

const find = (request: Request, response: Response, next: NextFunction) => {
    const { params } = request;

    const idPessoa = Number(params.idPessoa);

    const message = testeHelper(String(idPessoa));

    response
        .status(200)
        .json({
            message,
        });
};

export default {
    find,
};
