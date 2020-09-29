import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UserModel } from './user.model';
import { UserService } from './user.service';

@Resolver(of => UserModel)
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Query(returns => UserModel)
  async user(@Args('id') id: number) {
    return await this.userService.findOne(id);
  }

  @Mutation(returns => UserModel)
  async createUser(@Args('title') title: string) {
    return await this.userService.create({ title });
  }
}
