import User from '../models/User';
import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth'
import AppError from '../errors/AppError';

interface Request {
    email: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}

class AuthenticateUserService {
    public async execute({email, password}: Request): Promise<Response> {
        const UsersRepository = getRepository(User);

        const user = await UsersRepository.findOne({ where: {email}});
        
        if(!user){
            throw new AppError('Combinação de Email/senha incorreta! ', 401)
        }

        const passwordMatched = await compare(password, user.password);
    
        if(!passwordMatched){
            throw new AppError('Combinação de Email/senha incorreta! ', 401)
        }

        const token = sign({}, authConfig.jwt.secret, {
            subject: user.id,
            expiresIn: authConfig.jwt.expiresIn,
        });

        return {
            user,
            token,
        };
    }
}

export default AuthenticateUserService;