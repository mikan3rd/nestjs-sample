import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { AccountDTO } from "../dto/account.dto";
import { AccountModel } from "../models/account.model";

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountModel)
    private userRepository: Repository<AccountModel>,
  ) {}

  create(payload: AccountDTO) {
    return this.userRepository.save({ ...payload });
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }
}
