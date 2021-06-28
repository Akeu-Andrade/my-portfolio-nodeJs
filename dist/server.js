"use strict";

require("reflect-metadata");

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

var _routes = _interopRequireDefault(require("./routes"));

var _uploud = _interopRequireDefault(require("./config/uploud"));

require("./database");

var _AppError = _interopRequireDefault(require("./errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use('/files', _express.default.static(_uploud.default.directory));
app.use(_routes.default);
app.use((err, request, response, _) => {
  if (err instanceof _AppError.default) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Erro interno do servidor'
  });
});
app.listen(3333, () => {
  console.log('🚀 Aplicação iniciada na porta 3333');
});