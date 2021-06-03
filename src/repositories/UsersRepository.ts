import User from '../models/User'

interface CreateUserDTO{
    createDate: Date; 
    updateDate: Date;
    name: string; 
    email: string; 
    senha: string;
}

class UsersRepository {
    private users: User[]; 

    constructor(){
        this.users = [];
    }

    public all(): User[] {
        return this.users;
    }

    public findByEmail(email: string): User | null {
        const findEmail = this.users.find(
            user => (user.email === email)
        );

        return findEmail || null;
    }

    public create({createDate, updateDate, name, email, senha}: CreateUserDTO): User {
        const user = new User({createDate, updateDate, name, email, senha});

        this.users.push(user);

        return user;
    }
}

export default UsersRepository;

