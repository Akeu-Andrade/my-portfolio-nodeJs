"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateUsers1622756099904 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'users',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'email',
        type: 'varchar'
      }, {
        name: 'password',
        type: 'varchar'
      }, {
        name: 'whatsappProfileUrl',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'linkedinProfileUrl',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'twitterProfileUrl',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'instagramProfileUrl',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'bitbucketProfileUrl',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'gitlabProfileUrl',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'githubProfileUrl',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'surname',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'profession',
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
  }

  async down(queryRunner) {
    await queryRunner.dropTable('users');
  }

}

exports.default = CreateUsers1622756099904;