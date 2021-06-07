import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
} from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    surname: string;

    @Column()
    profession: string;

    @Column()
    githubProfileUrl: string;

    @Column()
    gitlabProfileUrl: string;

    @Column()
    bitbucketProfileUrl: string;

    @Column()
    instagramProfileUrl: string;

    @Column()
    twitterProfileUrl: string;

    @Column()
    linkedinProfileUrl: string;

    @Column()
    whatsappProfileUrl: string;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}

export default User;