import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateFKGenderToMovie1637378276070 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'movie', new TableForeignKey({
                columnNames: ['gender_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'gender',
                name: 'fk_gender_movie'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('movie', 'fk_gender_movie');
    }

}
