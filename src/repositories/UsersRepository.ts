import User from '../models/User';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
class UsersRepository extends Repository<User>{
    public async findByEmail(email: string): Promise<User | null> {
        const findUser = await this.findOne({
            where: { email },
        });

        return findUser || null;
    }
}

export default UsersRepository;

