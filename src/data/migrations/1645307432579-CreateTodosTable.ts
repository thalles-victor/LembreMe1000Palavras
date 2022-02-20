import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTodosTable1645307432579 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "words_litst_model",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'word',
                        type: 'varchar'
                    }

                ]
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('words_litst_model')
    }

}
