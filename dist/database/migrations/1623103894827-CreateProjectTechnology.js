"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProjectTechnology1623103894827 = void 0;

var _typeorm = require("typeorm");

class CreateProjectTechnology1623103894827 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'projectTechnology',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'project_id',
        type: 'uuid',
        isNullable: true
      }, {
        name: 'technology_id',
        type: 'uuid',
        isNullable: true
      }]
    }));
    await queryRunner.createForeignKey('projectTechnology', new _typeorm.TableForeignKey({
      name: 'projectTechnologyProject',
      columnNames: ['project_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'projects',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }));
    await queryRunner.createForeignKey('projectTechnology', new _typeorm.TableForeignKey({
      name: 'projectTechnologyTechnology',
      columnNames: ['technology_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'technologys',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('projectTechnology', 'projectTechnologyProject');
    await queryRunner.dropForeignKey('projectTechnology', 'projectTechnologyTechnology');
    await queryRunner.dropTable('projectTechnology');
  }

}

exports.CreateProjectTechnology1623103894827 = CreateProjectTechnology1623103894827;