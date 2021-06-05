import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUsers1622756099904 implements MigrationInterface {
        public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
                new Table({
                    name: 'users',
                    columns: [
                        {
                            name: 'id',
                            type: 'uuid',
                            isPrimary: true,
                            generationStrategy: 'uuid',
                            default: 'uuid_generate_v4()'
                        },
                        {
                            name: 'name',
                            type: 'varchar',
                            isNullable: true,
                        },
                        
                        {
                            name: 'email',
                            type: 'varchar',
                            isUnique: true,
                            isNullable: true,
                        },
                        {
                            name: 'password',
                            type: 'varchar',
                            isNullable: true,
                        },
                        {
                            name: 'whatsappProfileUrl',
                            type: 'varchar',
                        },
                        {
                            name: 'linkedinProfileUrl',
                            type: 'varchar',
                        },
                        {
                            name: 'twitterProfileUrl',
                            type: 'varchar',
                        },{
                            name: 'instagramProfileUrl',
                            type: 'varchar',
                        },{
                            name: 'bitbucketProfileUrl',
                            type: 'varchar',
                        },{
                            name: 'gitlabProfileUrl',
                            type: 'varchar',
                        },{
                            name: 'githubProfileUrl',
                            type: 'varchar',
                        },{
                            name: 'surname',
                            type: 'varchar',
                        },{
                            name: 'profession',
                            type: 'varchar',
                            isNullable: true,
                        },
                        {
                            name: 'createDate',
                            type: 'timestamp',
                            default: 'now()',
                        },
                        {
                            name: 'updateDate',
                            type: 'timestamp',
                            default: 'now()',
                        }
                    ]
                })
            );
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable('users')
        }
    
    }
    
