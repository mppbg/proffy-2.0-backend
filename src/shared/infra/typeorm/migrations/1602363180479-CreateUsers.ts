import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1602363180479 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },

                    {
                        name: 'firstname',
                        type: 'varchar',
                    },

                    {
                        name: 'lastname',
                        type: 'varchar',
                    },

                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },

                    {
                        name: 'whatsapp',
                        type: 'varchar',
                        isNullable: true,
                    },

                    {
                        name: 'bio',
                        type: 'varchar',
                        isNullable: true,
                    },

                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'avatar',
                        type: 'varchar',
                        isNullable: true,
                    },

                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },

                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
