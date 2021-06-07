import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProjects1622906376283 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'projects',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'link',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'image',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'description',
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
        await queryRunner.createForeignKey('projects', new TableForeignKey({
            name: 'ProjectUser',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('projects', 'ProjectUser');
        await queryRunner.dropTable('projects');
    }

}
