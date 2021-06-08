import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTechnology1623103162334 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'technologys',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'link',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'icon',
                        type: 'varchar',
                        isNullable: true,
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('technologys');
    }
}
