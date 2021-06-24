"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTechnology1623103162334 = void 0;

var _typeorm = require("typeorm");

class CreateTechnology1623103162334 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'technologys',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'description',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'link',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'icon',
        type: 'varchar',
        isNullable: true
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('technologys');
  }

}

exports.CreateTechnology1623103162334 = CreateTechnology1623103162334;