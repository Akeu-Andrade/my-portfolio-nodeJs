"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _AuthenticateUserService = _interopRequireDefault(require("../services/AuthenticateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sessionsRoutes = (0, _express.Router)();
sessionsRoutes.post('/', async (request, response) => {
  const {
    email,
    password
  } = request.body;
  const authenticateUser = new _AuthenticateUserService.default();
  const {
    user,
    token
  } = await authenticateUser.execute({
    email,
    password
  });
  delete user.password;
  return response.json({
    user,
    token
  });
});
var _default = sessionsRoutes;
exports.default = _default;