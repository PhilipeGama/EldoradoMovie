import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMovieTable1637375699626 implements MigrationInterface {

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
                    isNullable: false

                },
                {
                    name: "slug",
                    type: "varchar",
                    isNullable: false

                },
                {
                    name: "synopsis",
                    type: "text(100)",
                    isNullable: false
                },
                {
                    name: "release_date",
                    type: "Date",
                    isNullable: false
                },
                {
                    name: "box_office",
                    type: "Decimal(10,2)"
                },
                {
                    name: "poster",
                    type: "varchar(250)",
                    isNullable: false
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
                },
                {
                    name: 'gender_id',
                    type: 'int',
                    length: '11'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("movie");
    }

}
