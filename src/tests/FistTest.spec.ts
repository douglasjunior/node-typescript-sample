import { testeHelper } from '~/helpers/teste-helper';

test('it should create a message', () => {
    const message = testeHelper(50);

    expect(message).toEqual('Seu ID é: 50');
});
