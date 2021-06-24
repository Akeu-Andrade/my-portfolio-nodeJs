"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Project = _interopRequireDefault(require("./Project"));

var _Technology = _interopRequireDefault(require("./Technology"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let ProjectTechnology = (_dec = (0, _typeorm.Entity)('projectTechnologys'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.ManyToOne)(() => _Project.default), _dec5 = (0, _typeorm.JoinColumn)({
  name: 'project_id'
}), _dec6 = Reflect.metadata("design:type", typeof _Project.default === "undefined" ? Object : _Project.default), _dec7 = (0, _typeorm.ManyToOne)(() => _Technology.default), _dec8 = (0, _typeorm.JoinColumn)({
  name: 'technology_id'
}), _dec9 = Reflect.metadata("design:type", typeof _Technology.default === "undefined" ? Object : _Technology.default), _dec10 = (0, _typeorm.Column)(), _dec11 = Reflect.metadata("design:type", String), _dec12 = (0, _typeorm.Column)(), _dec13 = Reflect.metadata("design:type", String), _dec14 = (0, _typeorm.Column)(), _dec15 = Reflect.metadata("design:type", String), _dec16 = (0, _typeorm.Column)(), _dec17 = Reflect.metadata("design:type", String), _dec(_class = (_class2 = class ProjectTechnology {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "project", _descriptor2, this);

    _initializerDefineProperty(this, "technology", _descriptor3, this);

    this.project_id = void 0;
    this.technology_id = void 0;

    _initializerDefineProperty(this, "link", _descriptor4, this);

    _initializerDefineProperty(this, "image", _descriptor5, this);

    _initializerDefineProperty(this, "title", _descriptor6, this);

    _initializerDefineProperty(this, "description", _descriptor7, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "project", [_dec4, _dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "technology", [_dec7, _dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "link", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "image", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = ProjectTechnology;
exports.default = _default;