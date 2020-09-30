import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AccountModel } from "./models/account.model";
import { AccountModule } from "./modules/account.module";
import { InstagramModule } from "./modules/instagram.module";

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
      entities: [AccountModel],
      synchronize: false,
    }),
    AccountModule,
    InstagramModule,
  ],
  providers: [],
})
export class AppModule {}
