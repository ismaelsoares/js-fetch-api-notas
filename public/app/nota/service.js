import { handleStatus } from "../utils/promise-helpers.js";

const API = 'http://locahost:3000/notas';

export const notasService = {
    listAll() {
        return fetch(API)
            //lida com status da requisição
            .then(handleStatus)
            .catch(err => {
                //O serviço agora é o responsável em logar o erro
                console.log(err);
                //retorna uma mensagem amigável
                return Promise.reject('Não foi possível obter as notas fiscais')
            })
    }
}