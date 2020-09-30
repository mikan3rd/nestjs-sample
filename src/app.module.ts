import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserModel } from "./models/user.model";
import { InstagramModule } from "./modules/instagram.module";
import { UserModule } from "./modules/user.module";

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
      entities: [UserModel],
      synchronize: false,
    }),
    UserModule,
    InstagramModule,
  ],
  providers: [],
})
export class AppModule {}
