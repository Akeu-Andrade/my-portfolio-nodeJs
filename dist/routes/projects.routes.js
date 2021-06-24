"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _uploud = _interopRequireDefault(require("../config/uploud"));

var _typeorm = require("typeorm");

var _Project = _interopRequireDefault(require("../models/Project"));

var _CreateProjectService = _interopRequireDefault(require("../services/CreateProjectService"));

var _UpdateProjectImageService = _interopRequireDefault(require("../services/UpdateProjectImageService"));

var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const projectsRouter = (0, _express.Router)();
const uploud = (0, _multer.default)(_uploud.default); //projectsRouter.use(ensureAuthenticated);

projectsRouter.get('/', async (request, response) => {
  const projectsRepository = (0, _typeorm.getRepository)(_Project.default);
  const projects = await projectsRepository.find();
  return response.json(projects);
});
projectsRouter.post('/', _ensureAuthenticated.default, async (request, response) => {
  const {
    user_id,
    link,
    image,
    title,
    description
  } = request.body;
  const createProjectService = new _CreateProjectService.default();
  const project = await createProjectService.execute({
    user_id,
    link,
    image,
    title,
    description
  });
  return response.json(project);
});
projectsRouter.patch('/imagem', _ensureAuthenticated.default, uploud.single('image'), async (request, response) => {
  const UpdateProjectImage = new _UpdateProjectImageService.default();
  const project = await UpdateProjectImage.execute({
    user_id: request.user.id,
    project_id: request.body.project_id,
    imageFilename: request.file.filename
  });
  console.log(project);
  return response.json(project);
});
var _default = projectsRouter;
exports.default = _default;