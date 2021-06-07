import {Router} from 'express';
import usersRouter from './user.routes';
import projectsRoute from './project.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/projects', projectsRoute);

export default router;