import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTokens1675623536373 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    CREATE TABLE IF NOT EXISTS user_tokens(
      id int PRIMARY KEY UNIQUE auto_increment NOT NULL ,
      token varchar(36) UNIQUE NOT NULL,
      user_id int NOT NULL,
      created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE user_tokens`);
  }
}
