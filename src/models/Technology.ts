import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    JoinColumn,
    OneToMany
} from 'typeorm';
import ProjectTechnology from './ProjectTechnology';

@Entity('technologys')
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