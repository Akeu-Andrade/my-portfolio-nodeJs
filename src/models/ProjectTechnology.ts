import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn 
} from 'typeorm';

@Entity('projectTechnologys')
class ProjectTechnology {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    project_id: string;

    technology_id: string;

    @Column()
    link: string;

    @Column()
    image: string;

    @Column()
    title: string;

    @Column()
    description: string;
}

export default ProjectTechnology;