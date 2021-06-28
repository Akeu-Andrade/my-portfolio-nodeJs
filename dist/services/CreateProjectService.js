"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Project = _interopRequireDefault(require("../models/Project"));

var _typeorm = require("typeorm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateProjectService {
  async execute({
    user_id,
    link,
    image,
    title,
    description
  }) {
    const projectsRepository = (0, _typeorm.getRepository)(_Project.default);
    const project = projectsRepository.create({
      user_id,
      link,
      image,
      title,
      description
    });
    await projectsRepository.save(project);
    return project;
  }

}

var _default = CreateProjectService;
exports.default = _default;