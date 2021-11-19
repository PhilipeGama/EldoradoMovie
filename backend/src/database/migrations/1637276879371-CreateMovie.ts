import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMovie1637276879371 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'movie',
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar(50)",
                    isNullable: false,

                },
                {
                    name: "description",
                    type: "varchar(100)",
                    isNullable: false
                },
                {
                    name: "releaseDate",
                    type: "varchar(15)",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    isNullable: false
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    isNullable: true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("movie");
    }

}
