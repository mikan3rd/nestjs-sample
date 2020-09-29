import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private userRepository: Repository<UserModel>,
  ) {}

  findAll(): Promise<UserModel[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<UserModel> {
    return this.userRepository.findOne(id);
  }
}
