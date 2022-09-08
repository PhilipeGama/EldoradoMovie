import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateGenderTable1637376629096 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'gender',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					{
						name: 'name',
						type: 'varchar(30)',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'created_at',
						type: 'timestamp',
						isNullable: false,
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						isNullable: true,
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('gender');
	}
}
