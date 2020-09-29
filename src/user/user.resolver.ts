import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { UserModel } from './user.model';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}
  @Query(returns => UserModel)
  async customer(@Args('id') id: string): Promise<UserModel> {
    return await this.userService.findOne(id);
  }
}
