import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AccountModel } from "../models/account.model";
import { AccountResolver } from "../resolvers/account.resolver";
import { AccountService } from "../services/account.service";

import { YoutubeModule } from "./youtube.module";

@Module({
  imports: [TypeOrmModule.forFeature([AccountModel]), forwardRef(() => YoutubeModule)],
  providers: [AccountService, AccountResolver],
  exports: [AccountService],
})
export class AccountModule {}
