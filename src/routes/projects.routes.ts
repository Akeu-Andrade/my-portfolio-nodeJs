import { request, response, Router } from 'express';
import multer from 'multer';
import uploudConfig from '../config/uploud';

import { getRepository } from 'typeorm';
import Project from '../models/Project';

import CreateProjectService from '../services/CreateProjectService';
import UpdateProjectImageService from '../services/UpdateProjectImageService';

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

    const { user_id, link, image, title, description } = request.body;

    const createProjectService = new CreateProjectService();

    const project = await createProjectService.execute({ user_id, link, image, title, description })
    return response.json(project);
})

projectsRouter.patch('/imagem', 
    ensureAuthenticated, 
    uploud.single('image'),
    async (request, response)=> {
        const UpdateProjectImage = new UpdateProjectImageService();
        const project = await UpdateProjectImage.execute({
            user_id: request.user.id,
            project_id: request.body.project_id,
            imageFilename: request.file.filename,
        });

        console.log(project)
        return response.json(project);
    },
);

export default projectsRouter;
