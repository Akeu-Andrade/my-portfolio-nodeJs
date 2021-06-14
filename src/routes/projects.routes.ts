import { request, response, Router } from 'express';
import multer from 'multer';
import uploudConfig from '../config/uploud';

import { getRepository } from 'typeorm';
import Project from '../models/Project';

import CreateProjectService from '../services/CreateProjectService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const projectsRouter = Router();
const uploud = multer(uploudConfig);

//projectsRouter.use(ensureAuthenticated);

projectsRouter.get('/', async (request, response) => {
    const projectsRepository = getRepository(Project);
    const projects = await projectsRepository.find();

    return response.json(projects);
})

projectsRouter.post('/', ensureAuthenticated, async (request, response)=> {
    try{
        const { user_id, link, image, title, description } = request.body;

        const createProjectService = new CreateProjectService();

        const project = await createProjectService.execute({ user_id, link, image, title, description })
        return response.json(project);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
})

projectsRouter.patch('/imagem', ensureAuthenticated, uploud.single('image'), async (request, response)=> {
    console.log(request.file);
    return response.json({ok: true});
})

export default projectsRouter;
