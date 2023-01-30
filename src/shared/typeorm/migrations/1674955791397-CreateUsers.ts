import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1674955791397 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE IF NOT EXISTS users(
                id int auto_increment NOT NULL,
                name varchar(150) NOT NULL,
                email varchar(150) NOT NULL,
                password varchar(150) NOT NULL,
                avatar varchar(150),
                created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY(id),
                UNIQUE (id,email)
            )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE users;`);
  }
}
