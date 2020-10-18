import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AccountModel } from "./models/account.model";
import { YoutubeChannelModel } from "./models/youtubeChannel.model";
import { YoutubeVideoModel } from "./models/youtubeVideo.model";
import { AccountModule } from "./modules/account.module";
import { InstagramModule } from "./modules/instagram.module";
import { YoutubeModule } from "./modules/youtube.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "nestjs-sample",
      entities: [AccountModel, YoutubeChannelModel, YoutubeVideoModel],
      synchronize: false,
    }),
    AccountModule,
    YoutubeModule,
    InstagramModule,
  ],
  providers: [],
})
export class AppModule {}
