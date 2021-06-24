"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _uploud = _interopRequireDefault(require("../config/uploud"));

var _Project = _interopRequireDefault(require("../models/Project"));

var _User = _interopRequireDefault(require("../models/User"));

var _AppError = _interopRequireDefault(require("../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateProjectImageService {
  async execute({
    user_id,
    project_id,
    imageFilename
  }) {
    /* Verifica se esse usuario está logado */
    const usersRepository = (0, _typeorm.getRepository)(_User.default);
    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new _AppError.default('Erro na autenticação, você não está logado!.', 401);
    }

    const projectsRepository = (0, _typeorm.getRepository)(_Project.default);
    const project = await projectsRepository.findOne(project_id);
    console.log(project.image);

    if (project.image) {
      const projectImageFilePath = _path.default.join(_uploud.default.directory, project.image);

      const projectImageFileExists = await _fs.default.promises.stat(projectImageFilePath);

      if (projectImageFileExists) {
        await _fs.default.promises.unlink(projectImageFilePath);
      }
    }

    project.image = imageFilename;
    await projectsRepository.save(project);
    return project;
  }

}

var _default = UpdateProjectImageService;
exports.default = _default;