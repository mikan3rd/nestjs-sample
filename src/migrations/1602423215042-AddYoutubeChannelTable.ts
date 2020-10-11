import { MigrationInterface, QueryRunner } from "typeorm";

export class AddYoutubeChannelTable1602423215042 implements MigrationInterface {
  name = "AddYoutubeChannelTable1602423215042";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `youtubeChannels` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `accountId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB",
    );
    await queryRunner.query(
      "ALTER TABLE `youtubeChannels` ADD CONSTRAINT `FK_c6ae27acf3bf4ab1d0dd04480db` FOREIGN KEY (`accountId`) REFERENCES `accounts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `youtubeChannels` DROP FOREIGN KEY `FK_c6ae27acf3bf4ab1d0dd04480db`");
    await queryRunner.query("DROP TABLE `youtubeChannels`");
  }
}
