"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProjects1622906376283 = void 0;

var _typeorm = require("typeorm");

class CreateProjects1622906376283 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'projects',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'user_id',
        type: 'uuid'
      }, {
        name: 'title',
        type: 'varchar'
      }, {
        name: 'link',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'image',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'description',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'createDate',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updateDate',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
    await queryRunner.createForeignKey('projects', new _typeorm.TableForeignKey({
      name: 'ProjectUser',
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('projects', 'ProjectUser');
    await queryRunner.dropTable('projects');
  }

}

exports.CreateProjects1622906376283 = CreateProjects1622906376283;