import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn 
} from 'typeorm';

@Entity('projects')
class Project {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    user_id: string;

    @Column()
    link: string;

    @Column()
    image: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}

export default Project;