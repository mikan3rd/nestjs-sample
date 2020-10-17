import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { AccountDTO } from "../dto/account.dto";
import { AccountModel } from "../models/account.model";

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountModel)
    private accountRepository: Repository<AccountModel>,
  ) {}

  save(payload: AccountDTO) {
    return this.accountRepository.save({ ...payload });
  }

  findAll() {
    return this.accountRepository.find({ relations: ["youtubeChannels"] });
  }

  findOne(id: number) {
    return this.accountRepository.findOne(id, { relations: ["youtubeChannels"] });
  }
}
