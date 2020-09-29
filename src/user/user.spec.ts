import { UserModel } from './user.model';

describe('User', () => {
  it('should be defined', () => {
    expect(new UserModel()).toBeDefined();
  });
});
