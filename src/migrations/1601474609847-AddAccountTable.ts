import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAccountTable1601474609847 implements MigrationInterface {
  name = "AddAccountTable1601474609847";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `accounts` (`id` int NOT NULL AUTO_INCREMENT, `profileName` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `thumbnailUrl` text NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE `accounts`");
  }
}
