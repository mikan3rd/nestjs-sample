import { Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { AccountDTO } from "../dto/account.dto";
import { AccountModel } from "../models/account.model";
import { AccountService } from "../services/account.service";

@Resolver((of) => AccountModel)
export class AccountResolver {
  constructor(@Inject(AccountService) private accountService: AccountService) {}

  @Query((returns) => AccountModel, { nullable: true })
  async account(@Args("id") id: number) {
    return await this.accountService.findOne(id);
  }

  @Query((returns) => [AccountModel])
  async accounts() {
    return await this.accountService.findAll();
  }

  @Mutation((returns) => AccountModel)
  async saveAccount(@Args("account") account: AccountDTO) {
    return await this.accountService.save(account);
  }

  @Mutation((returns) => AccountModel, { nullable: true })
  async deleteYoutubeChannel(@Args("id") id: number) {
    return await this.accountService.delete(id);
  }
}
