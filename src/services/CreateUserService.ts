import User from '../models/User';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';

interface Request{
    createDate: Date; 
    updateDate: Date; 
    name: string; 
    email: string; 
    senha: string;
}

class CreateUserService{
    public async execute({createDate, updateDate, name, email, senha}: Request): Promise<User>{
        const usersRepository = getCustomRepository(UsersRepository);
        
        const findUserInSameEmail = await usersRepository.findByEmail(email);

        if(findUserInSameEmail){
            throw Error('Este email já foi cadastrado!');
        }

        const user = usersRepository.create({
            createDate: createDate,
            updateDate: updateDate,
            name, 
            email,
            senha
        });

        await usersRepository.save(user);

        return user; 
    }
}

export default CreateUserService;