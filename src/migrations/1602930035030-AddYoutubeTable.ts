import { MigrationInterface, QueryRunner } from "typeorm";

export class AddYoutubeTable1602930035030 implements MigrationInterface {
  name = "AddYoutubeTable1602930035030";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `youtubeVideos` (`serviceId` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `channelServiceId` varchar(255) NOT NULL, PRIMARY KEY (`serviceId`)) ENGINE=InnoDB",
    );
    await queryRunner.query(
      "CREATE TABLE `youtubeChannels` (`serviceId` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `accountId` int NOT NULL, PRIMARY KEY (`serviceId`)) ENGINE=InnoDB",
    );
    await queryRunner.query(
      "ALTER TABLE `youtubeVideos` ADD CONSTRAINT `FK_7ebf736ce4d70363c70049ea855` FOREIGN KEY (`channelServiceId`) REFERENCES `youtubeChannels`(`serviceId`) ON DELETE CASCADE ON UPDATE CASCADE",
    );
    await queryRunner.query(
      "ALTER TABLE `youtubeChannels` ADD CONSTRAINT `FK_c6ae27acf3bf4ab1d0dd04480db` FOREIGN KEY (`accountId`) REFERENCES `accounts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `youtubeChannels` DROP FOREIGN KEY `FK_c6ae27acf3bf4ab1d0dd04480db`");
    await queryRunner.query("ALTER TABLE `youtubeVideos` DROP FOREIGN KEY `FK_7ebf736ce4d70363c70049ea855`");
    await queryRunner.query("DROP TABLE `youtubeChannels`");
    await queryRunner.query("DROP TABLE `youtubeVideos`");
  }
}
