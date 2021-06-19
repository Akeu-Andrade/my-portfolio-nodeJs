import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploudConfig from '../config/uploud';
import Project from '../models/Project';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
    user_id: string;
    project_id: string;
    imageFilename: string;
}

class UpdateProjectImageService {
    public async execute({user_id, project_id, imageFilename}: Request): Promise<Project> {
        /* Verifica se esse usuario está logado */
        const usersRepository = getRepository(User);
        const user = await usersRepository.findOne(user_id);
        if (!user) {
            throw new AppError('Erro na autenticação, você não está logado!.', 401);
        }

        const projectsRepository = getRepository(Project);
        const project = await projectsRepository.findOne(project_id);
        
        console.log(project.image)
        if(project.image){
            const projectImageFilePath = path.join(uploudConfig.directory, project.image);
            const projectImageFileExists = await fs.promises.stat(projectImageFilePath);
            
            if(projectImageFileExists){
                await fs.promises.unlink(projectImageFilePath);
            }
        }   
        project.image = imageFilename;

        await projectsRepository.save(project);

        return project;
        
    }
}

export default UpdateProjectImageService;