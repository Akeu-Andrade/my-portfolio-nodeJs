import User from '../models/User';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';
import { hash } from 'bcryptjs';

interface Request{ 
    name: string; 
    email: string; 
    password: string;
}

class CreateUserService{
    public async execute({name, email, password}: Request): Promise<User>{
        const usersRepository = getCustomRepository(UsersRepository);
        
        const findUserInSameEmail = await usersRepository.findByEmail(email);

        if(findUserInSameEmail){
            throw Error('Este email já foi cadastrado!');
        }

        const hashedPassword = await hash(password, 8);

        const user = usersRepository.create({
            name, 
            email,
            password: hashedPassword,
        });

        await usersRepository.save(user);

        return user; 
    }
}

export default CreateUserService;