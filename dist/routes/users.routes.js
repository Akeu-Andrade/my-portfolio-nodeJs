"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CreateUserService = _interopRequireDefault(require("../services/CreateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersRoutes = (0, _express.Router)();
usersRoutes.post('/', async (request, response) => {
  const {
    name,
    email,
    password
  } = request.body;
  const createUser = new _CreateUserService.default();
  const user = await createUser.execute({
    name,
    email,
    password
  });
  delete user.password;
  return response.json(user);
});
var _default = usersRoutes;
exports.default = _default;