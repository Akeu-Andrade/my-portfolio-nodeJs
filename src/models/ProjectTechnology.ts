import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import Project from './Project';
import Technology from './Technology'

@Entity('projectTechnologys')
class ProjectTechnology {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=> Project)
    @JoinColumn({name: 'project_id'})
    project: Project;

    @ManyToOne(()=> Technology)
    @JoinColumn({name: 'technology_id'})
    technology: Technology;

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