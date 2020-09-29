import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserTable1601385832520 implements MigrationInterface {
  name = 'AddUserTable1601385832520';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `user_model` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `user_model`');
  }
}
