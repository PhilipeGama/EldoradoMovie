import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1637418459582 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'user', 
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar(50)',
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'varchar(50)',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    isNullable: false
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    isNullable: true
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }

}
