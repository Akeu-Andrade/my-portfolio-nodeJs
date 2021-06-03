import { uuid } from 'uuidv4';

class User {
    id: string;

    createDate: Date;

    updateDate: Date;

    name: string;

    email: string;

    senha: string;

    constructor({createDate, updateDate, name, email, senha}: Omit<User, 'id'>){
        this.id = uuid();
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.name = name;
        this.email = email;
        this.senha = senha;
    }

}

export default User;