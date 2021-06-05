import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const usersRoutes = Router();


usersRoutes.get('/', async (request, response) => {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.find();

    return response.json(users);
})

usersRoutes.post('/', async (request, response)=> {
    try{
        const { name, email, senha, createDate, updateDate} = request.body;

        const parseCreateDate = parseISO(createDate);

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ createDate: parseCreateDate, updateDate, email, name, senha})
        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
})

export default usersRoutes;

