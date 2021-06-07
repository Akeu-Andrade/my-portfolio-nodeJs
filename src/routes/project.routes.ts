import { Router } from 'express';
import { getRepository } from 'typeorm';
import Project from '../models/Project';

import CreateProjectService from '../services/CreateProjectService';

const projectsRoutes = Router();

projectsRoutes.get('/', async (request, response) => {
    const projectsRepository = getRepository(Project);
    const projects = await projectsRepository.find();

    return response.json(projects);
})

projectsRoutes.post('/', async (request, response)=> {
    try{
        const { user_id, link, image, title, description } = request.body;

        const createProjectService = new CreateProjectService();

        const project = await createProjectService.execute({ user_id, link, image, title, description })
        return response.json(project);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
})

export default projectsRoutes;

