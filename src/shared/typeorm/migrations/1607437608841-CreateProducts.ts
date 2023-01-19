import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProducts1607437608841 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query("CREATE TABLE IF NOT EXISTS products (id int, name varchar(150), price decimal(10,2), quantity int, created_at timestamp, updated_at timestamp)")
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE products');
  }
}
