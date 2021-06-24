"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _users = _interopRequireDefault(require("./users.routes"));

var _projects = _interopRequireDefault(require("./projects.routes"));

var _sessions = _interopRequireDefault(require("./sessions.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use('/users', _users.default);
router.use('/projects', _projects.default);
router.use('/sessions', _sessions.default);
var _default = router;
exports.default = _default;