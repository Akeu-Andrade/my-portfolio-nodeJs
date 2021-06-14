import {Router} from 'express';
import usersRouter from './users.routes';
import projectsRoute from './projects.routes';
import sessionsRoute from './sessions.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/projects', projectsRoute);
router.use('/sessions', sessionsRoute);

export default router;