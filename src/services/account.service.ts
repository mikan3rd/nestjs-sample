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

  async findOne(id: number) {
    return this.accountRepository.findOne(id, { relations: ["youtubeChannels"] });
  }

  async findAll() {
    return this.accountRepository.find({ relations: ["youtubeChannels"] });
  }

  async save(payload: AccountDTO) {
    return this.accountRepository.save({ ...payload });
  }

  async delete(id: number) {
    const target = await this.findOne(id);
    await this.accountRepository.delete(id);
    return target;
  }
}
