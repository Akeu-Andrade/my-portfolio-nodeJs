"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _typeorm = require("typeorm");

var _bcryptjs = require("bcryptjs");

var _jsonwebtoken = require("jsonwebtoken");

var _auth = _interopRequireDefault(require("../config/auth"));

var _AppError = _interopRequireDefault(require("../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthenticateUserService {
  async execute({
    email,
    password
  }) {
    const UsersRepository = (0, _typeorm.getRepository)(_User.default);
    const user = await UsersRepository.findOne({
      where: {
        email
      }
    });

    if (!user) {
      throw new _AppError.default('Combinação de Email/senha incorreta! ', 401);
    }

    const passwordMatched = await (0, _bcryptjs.compare)(password, user.password);

    if (!passwordMatched) {
      throw new _AppError.default('Combinação de Email/senha incorreta! ', 401);
    }

    const token = (0, _jsonwebtoken.sign)({}, _auth.default.jwt.secret, {
      subject: user.id,
      expiresIn: _auth.default.jwt.expiresIn
    });
    return {
      user,
      token
    };
  }

}

var _default = AuthenticateUserService;
exports.default = _default;