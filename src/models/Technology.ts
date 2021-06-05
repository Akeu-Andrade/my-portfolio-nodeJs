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

    @Column()
    link: string;

    @Column()
    description: string;

    @Column()
    icon: string;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}

export default Project;