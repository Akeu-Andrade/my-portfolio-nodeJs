import Project from '../models/Project';
import { getRepository } from 'typeorm';

interface Request{ 
    user_id: string
    link: string;
    image: string;
    title: string;
    description: string;
}

class CreateProjectService{
    public async execute({user_id, link, image, title, description}: Request): Promise<Project>{
        const projectsRepository = getRepository(Project);

        const project = projectsRepository.create({
            user_id, 
            link,
            image,
            title,
            description,
        });

        await projectsRepository.save(project);

        return project; 
    }
}

export default CreateProjectService;