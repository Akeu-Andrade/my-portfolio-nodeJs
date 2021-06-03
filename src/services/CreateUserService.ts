import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request{
    createDate: Date; 
    updateDate: Date;
    name: string; 
    email: string; 
    senha: string;
}

class CreateUserService{
    private usersRepository: UsersRepository;

    constructor(usersRepository: UsersRepository){
        this.usersRepository = usersRepository;
    }

    public execute({createDate, updateDate, name, email, senha}: Request){
        const findUserInSameEmail = this.usersRepository.findByEmail(email);

        if(findUserInSameEmail){
            throw Error('Este email já foi cadastrado!');
        }

        const user = this.usersRepository.create({
            createDate: createDate,
            updateDate: updateDate,
            name, 
            email,
            senha
        });

        return user;
    }
}

export default CreateUserService;