import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProjectTechnology1623103894827 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'projectTechnology',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'project_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'technology_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                ]
            })
        );
        await queryRunner.createForeignKey('projectTechnology', new TableForeignKey({
            name: 'projectTechnologyProject',
            columnNames: ['project_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'projects',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));
        await queryRunner.createForeignKey('projectTechnology', new TableForeignKey({
            name: 'projectTechnologyTechnology',
            columnNames: ['technology_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'technologys',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('projectTechnology', 'projectTechnologyProject');
        await queryRunner.dropForeignKey('projectTechnology', 'projectTechnologyTechnology');
        await queryRunner.dropTable('projectTechnology');
    }
}
