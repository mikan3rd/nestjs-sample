import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AccountModel } from "../models/account.model";
import { AccountResolver } from "../resolvers/account.resolver";
import { AccountService } from "../services/account.service";

@Module({
  imports: [TypeOrmModule.forFeature([AccountModel])],
  providers: [AccountService, AccountResolver],
  exports: [AccountService],
})
export class AccountModule {}
