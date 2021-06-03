import { Router } from 'express';
import { parseISO } from 'date-fns';

import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const usersRoutes = Router();
const usersRepository = new UsersRepository();


usersRoutes.get('/', (request, response) => {
    const users = usersRepository.all();

    return response.json(users);
})

usersRoutes.post('/', (request, response)=> {
    try{
        const { name, email, senha, date } = request.body;

        const parseDate = parseISO(date);

        const createUserService = new CreateUserService(usersRepository);

        const user = createUserService.execute({date: parseDate, email, name, senha})
        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
})

export default usersRoutes;

