"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _UsersRepository = _interopRequireDefault(require("../repositories/UsersRepository"));

var _bcryptjs = require("bcryptjs");

var _AppError = _interopRequireDefault(require("../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateUserService {
  async execute({
    name,
    email,
    password
  }) {
    const usersRepository = (0, _typeorm.getCustomRepository)(_UsersRepository.default);
    const findUserInSameEmail = await usersRepository.findByEmail(email);

    if (findUserInSameEmail) {
      throw new _AppError.default('Este email já foi cadastrado!');
    }

    const hashedPassword = await (0, _bcryptjs.hash)(password, 8);
    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword
    });
    await usersRepository.save(user);
    return user;
  }

}

var _default = CreateUserService;
exports.default = _default;